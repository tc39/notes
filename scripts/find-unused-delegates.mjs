import fs from 'fs';
import { strict as assert } from 'node:assert';
import { resolve } from 'node:path';
import { readdir } from 'node:fs/promises';

const delegatesFile = getFileContents('./delegates.txt');
const delegatesCount = delegatesFile.split('\n').filter(x => x).length;

const re = /(?<=\().*(?=\))/g;
const delegates = delegatesFile.match(re);
const foundDelegates = [];

assert.equal(delegates.length, delegatesCount);

const notes = await getFiles('./meetings');

for (const n of notes) {

  const note = getFileContents(n);

  for (let i = 0; i < delegates.length; i++) {

    const d = delegates[i];

    const reDelegate = new RegExp(`${d}(?!\\w)`, "g");
    const m = reDelegate.exec(note);
    if(m) {
      foundDelegates.push(d);
      delegates.splice(i,1);
    }

  }


}

const unusedDelegates = delegates.filter(x => !foundDelegates.includes(x));
const unusedDelegateNames = [];

console.log(`\nfound ${unusedDelegates.length} delegates with no references in notes:\n`);

for (const d of unusedDelegates) {
  const reDelegate = new RegExp(`.*\\(${d}\\)`);
  const [m] = reDelegate.exec(delegatesFile);
  unusedDelegateNames.push(m);
}

unusedDelegateNames.sort();

for (const d of unusedDelegateNames) {
  console.log(d)
}

console.log('\n');

async function getFiles(dir) {

  const dirents = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(dirents.map((dirent) => {

    const r = resolve(dir, dirent.name);

    if(dirent.isDirectory()) {
      return getFiles(r);
    }
    else if (r.endsWith('.md')) {
      return r;
    }

  }));

  return [].concat(...files).filter(n => n);

}

function getFileContents(file) {
  return fs.readFileSync(file, 'utf8').toString();
}

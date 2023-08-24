#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

function getLine(txt, index) {

  let line = 1;

  for (let i = 0; i < index; i++) {
    if (txt[i] === '\n') {
      line += 1;
    }
  }

  return line;

}

export function findBadLinebreaks(file, fix = false) {

  let contents = fs.readFileSync(file, 'utf8').toString();

  const re = /(?<=[\w\d ])\n(?=[\w\d])/g;
  const matches = Array.from(contents.matchAll(re));
  let badLinebreaks = matches.length;

  if (matches.length > 0) {

    const lines = contents.split('\n');

    for (const m of matches) {

      const lineNumber = getLine(contents, m.index);

      // we can't use quantifiers with lookbehind, so we must resort to this
      // to skip code blocks where the linebreak is likely deliberate/desired
      const previousLine = lines[lineNumber - 1];

      if (previousLine.startsWith('`')) {
        badLinebreaks -= 1;
        continue;
      }

      if (fix) {
        contents = `${contents.slice(0, m.index).trimEnd()} ${contents.slice(m.index + 1)}`;
      } else {

        const start = Math.max(0, m.index - 33);
        const end = Math.min(contents.length - 1, m.index + 33);

        console.log(`found erroneous linebreak at line ${lineNumber}:\n${contents.slice(start, end)}\n`);

      }

    }

  }

  if (badLinebreaks > 0) {

    if (fix) {
      fs.writeFileSync(file, contents);
      console.log(`fixed ${matches.length} erroneous linebreaks`);
    } else {
      process.exitCode = 1;
    }

  }

}

// patterns match what is in package.json mdlint scripts
const files = await glob(
  '**/*.md',
  {
    ignore: [
      'node_modules/**',
      'meetings/201*/*.md',
      'meetings/202[0-2]*/*.md',
      'meetings/2023-0[1-3]/*.md',
    ]
  }
);

const fix = process.argv?.[2] === 'fix';

for (const f of files) {
  findBadLinebreaks(f, fix);
}

import { strict as assert } from 'node:assert';
import { findBadStuff } from './bad-linebreaks.mjs';
import fs from 'fs';
import crypto from 'crypto';

const afterMD = './scripts/test-samples/bad-linebreaks-sample-after.md';
const beforeMD = './scripts/test-samples/bad-linebreaks-sample-before.md';

// verify hash values to detect file tampering
const knownBeforeHash = '5dfa7a6c97c43bf3321f2e9ccafd3ce8';
const knownAfterHash = '9ed9cc827a7ffa71e6c243a23d7e24a3';
const beforeHash = await getHashSlingingSlasher(beforeMD);
const afterHash = await getHashSlingingSlasher(afterMD);
assert.strictEqual(beforeHash, knownBeforeHash);
assert.strictEqual(afterHash, knownAfterHash);

let fixed, totalMatches;

({ fixed, totalMatches } = findBadStuff(beforeMD, true));
assert.strictEqual(totalMatches.badLinebreaks, 44);
assert.strictEqual(totalMatches.extraWhitespace, 131);
validateLines(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadStuff(afterMD, true));
assert.strictEqual(totalMatches.badLinebreaks, 0);
assert.strictEqual(totalMatches.extraWhitespace, 0);
validateLines(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadStuff(beforeMD));
assert.strictEqual(totalMatches.badLinebreaks, 44);
assert.strictEqual(totalMatches.extraWhitespace, 131);

function getHashSlingingSlasher(file) {  // 💀
  return new Promise((res, rej) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(file);
    stream.on('error', err => rej(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => res(hash.digest('hex')));
  });
}

function validateLines(actual, expected) {

  const expectedLines = expected.split('\n');
  const actualLines = actual.split('\n');

  for (let i = 0; i < expectedLines.length; i++) {
    const eLine = expectedLines[i];
    const aLine = actualLines[i];
    assert.strictEqual(aLine, eLine);
  }

}

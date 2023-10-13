import { strict as assert } from 'node:assert';
import { findBadStuff } from './bad-linebreaks.mjs';
import fs from 'fs';
import crypto from 'crypto';

const afterMD = './scripts/test-samples/bad-linebreaks-sample-after.md';
const beforeMD = './scripts/test-samples/bad-linebreaks-sample-before.md';

// verify hash values to detect file tampering
const knownAfterHash = '5f29c1fb4abd747c2dd801e12c600ee3';
const knownBeforeHash = '406e900af5cd9af66abbe5b3ab6bcf3e';
const afterHash = await getHashSlingingSlasher(afterMD);
const beforeHash = await getHashSlingingSlasher(beforeMD);
assert.strictEqual(afterHash, knownAfterHash);
assert.strictEqual(beforeHash, knownBeforeHash);

let fixed, totalMatches;

({ fixed, totalMatches } = findBadStuff(beforeMD, true));
assert.strictEqual(totalMatches.badLinebreaks, 12);
assert.strictEqual(totalMatches.extraWhitespace, 114);
assert.strictEqual(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadStuff(afterMD, true));
assert.strictEqual(totalMatches.badLinebreaks, 0);
assert.strictEqual(totalMatches.extraWhitespace, 0);
assert.strictEqual(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadStuff(beforeMD));
assert.strictEqual(totalMatches.badLinebreaks, 12);
assert.strictEqual(totalMatches.extraWhitespace, 114);

function getHashSlingingSlasher(file) {  // 💀
  return new Promise((res, rej) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(file);
    stream.on('error', err => rej(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => res(hash.digest('hex')));
  });
}

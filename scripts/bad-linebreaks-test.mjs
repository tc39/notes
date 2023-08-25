import { strict as assert } from 'node:assert';
import { findBadLinebreaks } from './bad-linebreaks.mjs';
import fs from 'fs';
import crypto from 'crypto';

const afterMD = './scripts/test-samples/bad-linebreaks-sample-after.md';
const beforeMD = './scripts/test-samples/bad-linebreaks-sample-before.md';

// verify hash values to detect file tampering
const knownAfterHash = '5e03eeb87149ca238ab55d422913c0f8';
const knownBeforeHash = '1f2c5d3956a9aceb29dd2b872c20a021';
const afterHash = await getHashSlingingSlasher(afterMD);
const beforeHash = await getHashSlingingSlasher(beforeMD);
assert.strictEqual(afterHash, knownAfterHash);
assert.strictEqual(beforeHash, knownBeforeHash);

let fixed, totalMatches;

({ fixed, totalMatches } = findBadLinebreaks(beforeMD, true));
assert.strictEqual(totalMatches, 12);
assert.strictEqual(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadLinebreaks(afterMD, true));
assert.strictEqual(totalMatches, 0);
assert.strictEqual(fixed, fs.readFileSync(afterMD, 'utf8').toString());

({ fixed, totalMatches } = findBadLinebreaks(beforeMD));
assert.strictEqual(totalMatches, 12);

function getHashSlingingSlasher(file) {  // 💀
  return new Promise((res, rej) => {
    const hash = crypto.createHash('md5');
    const stream = fs.createReadStream(file);
    stream.on('error', err => rej(err));
    stream.on('data', chunk => hash.update(chunk));
    stream.on('end', () => res(hash.digest('hex')));
  });
}

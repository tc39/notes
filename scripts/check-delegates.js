#!/usr/bin/env node

const fs = require('fs');

// List of delegate abbreviations that predate the 3-letter
// requirement. Do not change this!
const TWO_LETTER_ABBRS = new Set([
  'AC', 'AH', 'AK', 'AR', 'AS', 'BB', 'BE', 'BG', 'BM', 'BN', 'BS',
  'BT', 'BZ', 'CF', 'CM', 'CP', 'DC', 'DD', 'DE', 'DH', 'DL', 'DS',
  'DT', 'EA', 'EF', 'ET', 'EY', 'FN', 'FP', 'GB', 'GI', 'GN', 'GY',
  'IH', 'IS', 'IT', 'JB', 'JH', 'JK', 'JM', 'JN', 'JP', 'JS', 'JT',
  'KG', 'KM', 'KR', 'KS', 'LB', 'LH', 'LL', 'LM', 'MB', 'MF', 'MH',
  'MM', 'MP', 'MS', 'NC', 'NH', 'NL', 'NM', 'OH', 'PJ', 'PL', 'RB',
  'RH', 'RW', 'RX', 'SC', 'SK', 'SM', 'SP', 'TC', 'TD', 'TS', 'TW',
  'VM', 'WH', 'YK', 'ZB',
]);

const contents = fs.readFileSync('./delegates.txt', 'utf8').toString();
const re = /^(?<name>[^\(]+) \((?<abbr>[A-Z]{2,3})\)$/;
const abbrs = new Set();
for (const line of contents.split('\n')) {
  if (line.length === 0) continue;
  const match = re.exec(line);
  const {name, abbr} = match.groups;

  // Check for two-letter abbreviations.
  if (abbr.length < 3 && !TWO_LETTER_ABBRS.has(abbr)) {
    throw new Error(`Invalid abbreviation: ${abbr} New delegate abbreviations must consist of three letters.`);
  }

  // Check for duplicates.
  if (abbrs.has(abbr)) {
    throw new Error(`Duplicate abbreviation: ${abbr}`);
  }
  abbrs.add(abbr);

}

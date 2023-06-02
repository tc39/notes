#!/usr/bin/env node

import fs from 'fs';

export function checkDelegates(contents = fs.readFileSync('./delegates.txt', 'utf8').toString()) {

  console.debug('checking delegates...');

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


  const re = /^(?<name>[^(]+)(?: \((?<abbr>[^)]*)\))?$/;
  const abbrs = new Map;
  const lines = contents.split('\n');

  let lineNumber = 1;
  let previousLine = '';

  for (const line of lines) {
    if (line.length === 0) continue;
    const match = re.exec(line);
    const { abbr } = match.groups;

    if (previousLine.localeCompare(line, 'en') > 0) {
      throw new Error(`Line ${lineNumber}: Not in lexicographic order.`);
    }

    if (abbr == null) {
      throw new Error(`Line ${lineNumber}: Missing abbreviation for ${JSON.stringify(line)}.`);
    }

    if (!/^[A-Z]+$/.test(abbr)) {
      throw new Error(`Line ${lineNumber}: Abbreviations must be all uppercase Latin letters.`);
    }

    if (abbr.length === 2) {
      if (!TWO_LETTER_ABBRS.has(abbr)) {
        throw new Error(`Line ${lineNumber}: 2-letter abbreviation ${JSON.stringify(abbr)} not in allowlist. New delegate abbreviations must be three letters.`);
      }
    } else if (abbr.length !== 3) {
      throw new Error(`Line ${lineNumber}: Invalid abbreviation ${JSON.stringify(abbr)}. New delegate abbreviations must be three letters.`);
    }

    if (abbrs.has(abbr)) {
      throw new Error(`Line ${lineNumber}: Duplicate abbreviation ${JSON.stringify(abbr)}. Conflicting usage on line ${abbrs.get(abbr)}.`);
    }
    abbrs.set(abbr, lineNumber);

    previousLine = line;
    ++lineNumber;
  }

  console.debug('...delegates are valid\n');
}

#!/usr/bin/env node

import fs from 'fs';

export function checkDelegates(contents) {

  const DELEGATES_FILE_PATH = './delegates.txt';

  let isContentsDelegatesFile = false;

  if (!contents) {
    contents = fs.readFileSync(DELEGATES_FILE_PATH, 'utf8').toString();
    isContentsDelegatesFile = true;
  }

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

  // list of abbreviations that are not ideal.
  // most of these are here because they are grandfathered in.
  // new elements should only be false positives.
  const NON_IDEAL_ABBRS = new Set([
    'ABU', 'ACB', 'AEC', 'AEH', 'ALH', 'ARB', 'ASH', 'AVC', 'AVK',
    'AVP', 'AWB', 'AYS', 'BNG', 'BRK', 'CCN', 'CHU', 'CJI', 'CJR',
    'CJT', 'CZW', 'DAS', 'DDC', 'DEN', 'DFS', 'DFV', 'DHC', 'DJF',
    'DJW', 'DLM', 'DMM', 'DMP', 'DTL', 'DVE', 'EDB', 'FED', 'FRT',
    'FYT', 'GCW', 'GKZ', 'GPT', 'GRS', 'HUG', 'HUX', 'IOA', 'IVH',
    'JAN', 'JAZ', 'JBS', 'JDD', 'JFP', 'JHJ', 'JHL', 'JMN', 'JPB',
    'JPG', 'JRB', 'JSL', 'JSW', 'JTO', 'JXF', 'JXZ', 'JZY', 'KBK',
    'KCD', 'KGO', 'KHG', 'KOT', 'KZM', 'LCA', 'LCP', 'LEO', 'LFP',
    'LGY', 'LIU', 'LWT', 'LWW', 'LZH', 'LZJ', 'LZM', 'MAG', 'MAR',
    'MCM', 'MCW', 'MED', 'MGR', 'MHA', 'MJN', 'MJS', 'MLS', 'MPC',
    'MQW', 'MWS', 'MYC', 'MZG', 'NLY', 'PFC', 'PFM', 'PLH', 'PMD',
    'PZE', 'REK', 'ROF', 'RTM', 'SFC', 'SJL', 'SJY', 'SMK', 'SNS',
    'SRK', 'SRL', 'SSA', 'STH', 'SYH', 'SYP', 'SZH', 'SZT', 'TAB',
    'TEK', 'TJC', 'TOC', 'TVC', 'WES', 'WMM', 'WWW', 'WXK', 'WYJ',
    'XAX', 'XTY', 'XWC', 'YIY', 'YJM', 'YKL', 'YKZ', 'YRL', 'YTX',
    'YYC', 'ZJL', 'ZRJ', 'ZYY',
  ]);

  // delegates with only one name. this list should be as close to zero as possible...
  const MONONYMOUS = new Set([
    'Surma',
  ]);

  const allAbbrs = new Set(contents.match(/(?<=\()[^)]*(?=\))/g));

  const re = /^(?<firstName>[^( ]+) ?(?<lastName>[^(]+)?(?: \((?<abbr>[^)]*)\))?$/;
  const abbrs = new Map;
  const lines = contents.split('\n');

  let lineNumber = 1;
  let previousLine = '';

  for (const line of lines) {
    if (line.length === 0) continue;
    const match = re.exec(line);
    const { abbr, firstName, lastName } = match.groups;

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

    const idealTLA = getIdealTLA(firstName, lastName);

    if (idealTLA){
      if (!allAbbrs.has(idealTLA) && !NON_IDEAL_ABBRS.has(abbr) && !TWO_LETTER_ABBRS.has(abbr)){  // duplicates the 2-letter check, but helpful to distinguish these issues
        throw new Error(`Line ${lineNumber}: Should be using ideal TLA (${idealTLA}).  Note: because code cannot distinguish between a middle name vs a two-part last name, this may be a false positive.`);
      }
    } else if (!MONONYMOUS.has(firstName)) {
      throw new Error(`Line ${lineNumber}: Unexpected mononymous delegate.`);
    }

    previousLine = line;
    ++lineNumber;
  }

  if (isContentsDelegatesFile) {

    for (const abbr of TWO_LETTER_ABBRS) {
      if (!allAbbrs.has(abbr)){
        throw new Error(`abbreviation ${abbr} is included in TWO_LETTER_ABBRS, but does not exist in ${DELEGATES_FILE_PATH}`);
      }
    }

    for (const abbr of NON_IDEAL_ABBRS) {
      if (!allAbbrs.has(abbr)){
        throw new Error(`abbreviation ${abbr} is included in NON_IDEAL_ABBRS, but does not exist in ${DELEGATES_FILE_PATH}`);
      }
    }

  }

  console.debug('...delegates are valid\n');
}

function getIdealTLA(firstName, lastName) {

  if (lastName) {
    return `${firstName.slice(0, 1)}${lastName.slice(0, 1)}${lastName.slice(lastName.length - 1)}`.toUpperCase();
  }

  return null;

}

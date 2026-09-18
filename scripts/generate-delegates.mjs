#!/usr/bin/env node

import fs from 'node:fs';
import delegates from '@tc39/data-delegates' with { type: 'json' };

const DELEGATES_PATH = new URL('../delegates.txt', import.meta.url);
const CANONICAL_SOURCE = 'https://github.com/tc39/data/blob/HEAD/data/delegates/index.json';
const WARNING = `# This file is generated and is not the canonical source; edit ${CANONICAL_SOURCE} instead.`;

/** Produce the human-readable delegate list from the canonical JSON data. */
function getDelegatesContents() {
  const delegateLines = Object.entries(delegates)
    .map(([abbreviation, delegate]) => `${delegate.name} (${abbreviation})`)
    .sort((left, right) => left.localeCompare(right, 'en'));

  return [WARNING, '', ...delegateLines, ''].join('\n');
}

/** Write delegates.txt, or check its contents without modifying it. */
function generateDelegates(check) {
  const generatedContents = getDelegatesContents();

  if (check) {
    const currentContents = fs.existsSync(DELEGATES_PATH)
      ? fs.readFileSync(DELEGATES_PATH, 'utf8')
      : null;

    if (currentContents !== generatedContents) {
      console.error('delegates.txt is out of date; run `npm run generate-delegates` to update it.');
      process.exitCode = 1;
    }

    return;
  }

  fs.writeFileSync(DELEGATES_PATH, generatedContents);
}

generateDelegates(process.argv.includes('--check'));

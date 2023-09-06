#!/usr/bin/env node

import { marked } from 'marked';
import fs from 'fs';
import { glob } from 'glob';

// import attributes when?
const mdlintConfig = JSON.parse(fs.readFileSync('.markdownlint-cli2.jsonc', 'utf8').toString());

const reBadLinebreaks = /(?<=[\w\d ])\n(?=[\w\d ])/g;
const reExtraWhitespace = /^ +| (?= )| +$/gm;

export function findBadStuff(file, fix = false) {

  let contents = fs.readFileSync(file, 'utf8').toString();

  const tokens = marked.lexer(contents, { ...marked.getDefaults(), });

  const o = [];
  const totalMatches = { badLinebreaks: 0, extraWhitespace: 0 };

  for (let i = 0; i < tokens.length; i++) {

    const t = tokens[i];
    let tokenContent = t.raw;

    if (t.type === 'paragraph') {
      tokenContent = findBadLinebreaks(tokenContent, totalMatches, fix, file);
      tokenContent = findExtraWhitespace(tokenContent, totalMatches, fix, file);
    }

    // we don't need to build this array if `fix` is `false`, but this keeps complexity down
    o.push(tokenContent);

  }

  return {
    fixed: o.join(''),
    totalMatches,
  };

}

function findBadLinebreaks(tokenContent, totalMatches, fix, file) {

  const matches = Array.from(tokenContent.matchAll(reBadLinebreaks));
  totalMatches.badLinebreaks += matches.length;

  if (fix) {

    if (matches.length > 0) {

      let fixedContent = tokenContent;

      for (const m of matches) {
        fixedContent = `${fixedContent.slice(0, m.index)} ${fixedContent.slice(m.index + 1)}`;
      }

      return fixedContent;

    }

  } else if (matches.length > 0) {
    console.error(`${file}\nfound paragraph with ${matches.length} erroneous linebreak(s):\n${tokenContent}\n`);
  }

  return tokenContent;

}

function findExtraWhitespace(tokenContent, totalMatches, fix, file) {

  const matches = Array.from(tokenContent.matchAll(reExtraWhitespace));
  const extraWhitespaceCharacters = matches.join('').length;
  totalMatches.extraWhitespace += extraWhitespaceCharacters;

  if (fix) {

    if (matches.length > 0) {
      return tokenContent.replace(reExtraWhitespace, '');
    }

  } else if (matches.length > 0) {
    console.error(`${file}\nfound paragraph with ${extraWhitespaceCharacters} extra whitespace character(s):\n${tokenContent}\n`);
  }

  return tokenContent;

}

export async function processFiles(fix) {

  const files = await glob(
    mdlintConfig.globs,
    {
      ignore: mdlintConfig.ignores
    }
  );

  for (const f of files) {

    const { fixed, totalMatches } = findBadStuff(f, fix);

    if (fix) {
      fs.writeFileSync(f, fixed);
    }

    if (totalMatches.badLinebreaks > 0 || totalMatches.extraWhitespace > 0) {

      if (fix) {

        if (totalMatches.badLinebreaks > 0) {
          console.log(`fixed ${totalMatches.badLinebreaks} erroneous linebreak(s) in ${f}`);
        }

        if (totalMatches.extraWhitespace > 0) {
          console.log(`fixed ${totalMatches.extraWhitespace} extra whitespace character(s) in ${f}`);
        }

      } else {
        console.error('fix bad linebreaks and whitespace by running `npm run bad-linebreaks:fix` or `npm run fix:all`');
        process.exitCode = 1;
      }

    }

  }

}

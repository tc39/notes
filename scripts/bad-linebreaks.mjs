#!/usr/bin/env node

import { marked } from 'marked';
import fs from 'fs';
import { glob } from 'glob';

// import attributes when?
const mdlintConfig = JSON.parse(fs.readFileSync('.markdownlint-cli2.jsonc', 'utf8').toString());

// not exhaustive, just the types we care about
const tokenTypeEnum = Object.freeze({
  LIST: 'list',
  PARAGRAPH: 'paragraph',
  SPACE: 'space',
});

const reBadLinebreaks = /(?<=[\w\d \p{P}])\n(?=[\w\d ])/gu;
const reExtraWhitespaceParagraph = /^ +| (?= )| +$/gm;
const reExtraWhitespaceList = /(?<=^ {0,}[-*+] |\d+\. ) +|(?<=\w+ ) +| +$/gm;

export function findBadStuff(file, fix = false) {

  let contents = fs.readFileSync(file, 'utf8').toString();

  const tokens = marked.lexer(contents, { ...marked.getDefaults(), });

  const o = [];
  const totalMatches = { badLinebreaks: 0, extraWhitespace: 0 };

  for (let i = 0; i < tokens.length; i++) {

    const t = tokens[i];
    let tokenContent = t.raw;

    switch (t.type) {
      case tokenTypeEnum.PARAGRAPH:
        tokenContent = findBadLinebreaks(tokenContent, totalMatches, fix, file, t.type);
        // falls through
      case tokenTypeEnum.LIST:
      case tokenTypeEnum.SPACE:
        tokenContent = findExtraWhitespace(tokenContent, totalMatches, fix, file, t.type);
        break;
      default:
        // do nothing
    }

    // we don't need to build this array if `fix` is `false`, but this keeps complexity down
    o.push(tokenContent);

  }

  return {
    fixed: o.join(''),
    totalMatches,
  };

}

function findBadLinebreaks(tokenContent, totalMatches, fix, file, tokenType) {

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
    console.error(`${file}\nfound ${tokenType} with ${matches.length} erroneous linebreak(s):\n${tokenContent}\n`);
  }

  return tokenContent;

}

function findExtraWhitespace(tokenContent, totalMatches, fix, file, tokenType) {

  let re;

  switch (tokenType) {
    case tokenTypeEnum.PARAGRAPH:
    case tokenTypeEnum.SPACE:
      re = reExtraWhitespaceParagraph;
      break;
    case tokenTypeEnum.LIST:
      re = reExtraWhitespaceList;
      break;
    default:
      throw new TypeError(`unsupported token type: ${tokenType}`);
  }

  const matches = Array.from(tokenContent.matchAll(re));
  const extraWhitespaceCharacters = matches.join('').length;
  totalMatches.extraWhitespace += extraWhitespaceCharacters;

  if (fix) {

    if (matches.length > 0) {
      return tokenContent.replace(re, '');
    }

  } else if (matches.length > 0) {
    console.error(`${file}\nfound ${tokenType} with ${extraWhitespaceCharacters} extra whitespace character(s):\n${tokenContent}\n`);
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

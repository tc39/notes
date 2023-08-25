#!/usr/bin/env node

import { marked } from 'marked';
import fs from 'fs';
import { glob } from 'glob';

// import attributes when?
const mdlintConfig = JSON.parse(fs.readFileSync('.markdownlint-cli2.jsonc', 'utf8').toString());

const re = /(?<=[\w\d ])\n(?=[\w\d ])/g;

export function findBadLinebreaks(file, fix = false) {

  let contents = fs.readFileSync(file, 'utf8').toString();

  const tokens = marked.lexer(contents, { ...marked.getDefaults(), })

  const o = [];
  let totalMatches = 0;

  for (let i = 0; i < tokens.length; i++) {

    const t = tokens[i];

    if (t.type === 'paragraph') {

      const matches = Array.from(t.raw.matchAll(re));
      totalMatches += matches.length;

      if (fix) {
        if (matches.length > 0) {

          let fixedContent = t.raw;

          for (const m of matches) {
            fixedContent = `${fixedContent.slice(0, m.index)} ${fixedContent.slice(m.index + 1)}`;
          }

          o.push(fixedContent);

        } else {
          o.push(t.raw);
        }
      } else if (matches.length > 0) {
        console.log(`${file}\nfound paragraph with ${matches.length} erroneous linebreak(s):\n${t.raw}\n`);
      }

    } else if (fix) {
      o.push(t.raw);
    }

  }

  return {
    fixed: o.join(''),
    totalMatches,
  };

}

export async function processFiles(fix) {

  const files = await glob(
    mdlintConfig.globs,
    {
      ignore: mdlintConfig.ignores
    }
  );

  for (const f of files) {

    const { fixed, totalMatches } = findBadLinebreaks(f, fix);

    if (fix) {
      fs.writeFileSync(f, fixed);
    }

    if (totalMatches > 0) {

      if (fix) {
        console.log(`fixed ${totalMatches} erroneous linebreaks in ${f}`);
      } else {
        process.exitCode = 1;
      }

    }

  }

}

#!/usr/bin/env node

// System objects
const fs = require('fs');

// Third-party objects
const ct = require('common-tags');
const glob = require('glob');

function makeRedirect(url) {
  return ct.stripIndent`
    <!doctype html>
    <link rel="canonical" href="${url}">
    <meta http-equiv=refresh content="0;URL=${url}">
    `;
}

const results = glob.sync('./meetings/**/*.md');
for (const file of results.reverse()) {
  const fileName = file
    .replace(/\.\/meetings\//, '')
    .replace(/(\d{4}-\d{2})\//, '$1_')
    .replace('.md', '.html');
  const url = `https://github.com/tc39/notes/blob/master${file.slice(1)}`;
  fs.writeFileSync(fileName, makeRedirect(url));
}
fs.writeFileSync('index.html', makeRedirect('https://github.com/tc39/notes/tree/master/meetings'));

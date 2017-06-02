#!/usr/bin/env node

// System objects
const fs = require("fs");

// Third party objects
const ct = require("common-tags");
const glob = require("glob");
const Remarkable = require("remarkable");

// Program instances
const remarkable = new Remarkable({
  html: true,
  linkify: true,
});

glob("./es*/**/*.md", (error, results) => {
  const links = [];

  results.reverse().forEach(file => {
    const content = fs.readFileSync(file, "utf8");
    const alias = file.replace(/\.\/es.\//, "");
    const fileName = alias.replace(/(\d{4}-\d{2})\//, "$1_").replace(".md", ".html");
    const title = content.split('\n')[0].replace("# ", "").trim();

    fs.writeFileSync(fileName, makePage({ title, content }));
    links.push(`- [${title.replace(" Meeting Notes", "")}](${fileName})`);
  });

  fs.writeFileSync("index.html", makeIndex({ links }));
});

function makeIndex({links}) {
  return ct.stripIndent`
<!doctype html>
<meta charset="utf-8">
<ul>
${remarkable.render(links.join('\n'))}
</ul>
`;
}

function makePage({title, content}) {
  return ct.stripIndent`
<!doctype html>
<meta charset="utf-8">
<title>${title}</title>
${remarkable.render(content)}
`;
}

#!/usr/bin/env node

// System objects
const fs = require("fs");
const cp = require("child_process");
const path = require("path");

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
  const aliases = {};
  const titles = {};
  const links = [];
  const contents = results.reverse().reduce((accum, file) => {
    const source = fs.readFileSync(file, "utf8");
    const name = file.replace(/\.\/es.\//, "");
    aliases[name] = name.replace(/(\d{4}-\d{2})\//, "$1_").replace(".md", ".html");
    titles[name] = source.split('\n')[0].replace("# ", "").trim();
    accum[name] = source;
    return accum;
  }, {});


  // console.log(index(Object.keys(contents)));
// console.log(titles);
  // console.log(aliases);

  // console.log(contents["2017-05/may-25.md"]);

  Object.keys(aliases).forEach(alias => {
    const fileName = aliases[alias];
    const title = titles[alias];
    const content = contents[alias];
    fs.writeFileSync(fileName, makePage({ title, content }));

    // links.push(remarkable.render(`[${title.replace(" Meeting Notes", "")}](${fileName})`));
    links.push(`- [${title.replace(" Meeting Notes", "")}](${fileName})`);
  });


  const index = makeIndex({ links });

  fs.writeFileSync("index.html", index);
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



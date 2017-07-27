#!/usr/bin/env node

// System objects
const fs = require("fs");
const path = require("path");

// Third party objects
const ct = require("common-tags");
const glob = require("glob");
const Remarkable = require("remarkable");
const hljs = require("highlight.js");
const toc = require("markdown-toc");

// Program instances
const remarkable = new Remarkable("full", {
  html: true,
  linkify: true,
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return "";
  }
});

remarkable.use(remarkable => {
  let heading = "";
  let conclusion = "";
  let counter = 0;

  remarkable.renderer.rules.heading_open = (tokens, index) => {
    const next = tokens[index + 1].content;
    let isConclusion = false;
    if (/conclusion|resolution/i.test(next)) {
      isConclusion = true;
      if (heading) {
        conclusion = toc.slugify(heading);
      } else {
        // Fallback.
        conclusion = counter;
        counter++;
      }
    } else {
      // Agenda Items are <h2> (## foo)
      if (tokens[index].hLevel === 2) {
        heading = next;
      }
    }
    const id = `${toc.slugify(`${next}`)}${isConclusion ? `-${conclusion}` : ``}`.replace(/#/g, "");

    return `<a href="#${id}"><h${tokens[index].hLevel} id="${id}">`;
  };

  remarkable.renderer.rules.heading_close = (tokens, index) => {
    return `</h${tokens[index].hLevel}></a>`;
  };
});

const css = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.6.0/github-markdown.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github-gist.min.css" />
`;
const script = `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/languages/javascript.min.js"></script>
`;

glob("./es*/**/*.md", (error, results) => {
  const links = [];

  results.reverse().forEach(originalPath => {
    const content = fs.readFileSync(originalPath, "utf8");

    const fileName = originalPath
      .replace(/\.\/es.\//, "")
      .replace(/(\d{4}-\d{2})\//, "$1_")
      .replace(".md", ".html");

    const title = content.split('\n')[0].replace("# ", "").trim();

    const yearMonth = originalPath.match(/\/(\d{4}-\d{2})\//)[1];
    const contentWithHtmlLinks = content
      .replace(/\]\(([a-z]+-\d{1,2})\.md/g, `](${yearMonth}_$1.html`)
      .replace(/^\[([^\]]+)\]: ([a-z]+-\d{1,2})\.md/gm, `[$1]: ${yearMonth}_$2.html`);

    fs.writeFileSync(fileName, makePage({
      title,
      content: contentWithHtmlLinks
    }));
    links.push(`- [${title.replace(" Meeting Notes", "")}](${fileName})`);
  });

  fs.writeFileSync("index.html", makeIndex({ links }));
});

function makeIndex({links}) {
  return ct.stripIndent`
<!doctype html>
<meta charset="utf-8">
${css}
${script}
<body class="markdown-body">
<ul>
${remarkable.render(links.join('\n'))}
</ul>
</body>
`;
}

function makePage({title, content}) {
  return ct.stripIndent`
<!doctype html>
<meta charset="utf-8">
${css}
${script}
<title>${title}</title>
<body class="markdown-body">
${remarkable.render(content)}
</body>
`;
}

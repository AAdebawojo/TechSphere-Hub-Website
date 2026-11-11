"use strict";
// A small, safe Markdown subset: headings, bold, links, lists and blockquotes.
// Article text never passes through innerHTML.
window.TSHMarkdown = (() => {
  function inline(parent, text) {
    const tokens = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|\*\*([^*]+)\*\*|https?:\/\/[^\s<>]+/g;
    let position = 0,
      match;
    while ((match = tokens.exec(text))) {
      if (match.index > position)
        parent.append(document.createTextNode(text.slice(position, match.index)));
      if (match[1]) {
        const link = document.createElement("a");
        link.href = match[2];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        inline(link, match[1]);
        parent.append(link);
      } else if (match[3]) {
        const strong = document.createElement("strong");
        strong.textContent = match[3];
        parent.append(strong);
      } else {
        const url = match[0].replace(/[.,;!?]+$/, "");
        const link = document.createElement("a");
        link.href = url;
        link.textContent = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        parent.append(link);
        if (url.length < match[0].length)
          parent.append(document.createTextNode(match[0].slice(url.length)));
      }
      position = tokens.lastIndex;
    }
    if (position < text.length) parent.append(document.createTextNode(text.slice(position)));
  }
  function render(parent, source) {
    parent.replaceChildren();
    let headingCount = 0;
    for (const block of String(source)
      .replace(/\r/g, "")
      .split(/\n\s*\n/)) {
      const text = block.trim();
      if (!text) continue;
      const lines = text.split("\n");
      const heading = /^(#{2,3})\s+(.+)$/.exec(text);
      if (heading) {
        const node = document.createElement(heading[1].length === 2 ? "h2" : "h3");
        inline(node, heading[2]);
        node.id = `section-${++headingCount}`;
        parent.append(node);
      } else if (lines.every((line) => /^-\s+/.test(line))) {
        const list = document.createElement("ul");
        for (const line of lines) {
          const item = document.createElement("li");
          inline(item, line.replace(/^-\s+/, ""));
          list.append(item);
        }
        parent.append(list);
      } else if (lines.every((line) => /^\d+\.\s+/.test(line))) {
        const list = document.createElement("ol");
        list.start = Number(lines[0].match(/^\d+/)[0]);
        for (const line of lines) {
          const item = document.createElement("li");
          inline(item, line.replace(/^\d+\.\s+/, ""));
          list.append(item);
        }
        parent.append(list);
      } else {
        const quote = lines.every((line) => /^>\s?/.test(line));
        const node = document.createElement(quote ? "blockquote" : "p");
        inline(node, quote ? lines.map((line) => line.replace(/^>\s?/, "")).join(" ") : text);
        parent.append(node);
      }
    }
    return parent;
  }
  return { inline, render };
})();

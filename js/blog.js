"use strict";
(() => {
  const published = (window.TSH_POSTS || [])
    .filter((p) => p.status === "published")
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const el = (tag, text, className) => {
    const e = document.createElement(tag);
    if (text !== undefined) e.textContent = text;
    if (className) e.className = className;
    return e;
  };
  function imagePath(path) {
    return typeof path === "string" && /^images\/[\w/-]+\.(webp|png|jpe?g)$/i.test(path)
      ? path
      : "images/learning-students.webp";
  }
  function dateLabel(value) {
    if (!value) return "";
    const d = new Date(value + "T12:00:00Z");
    return Number.isNaN(d.getTime())
      ? ""
      : d.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          timeZone: "UTC",
        });
  }
  const readingTime = (post) =>
    Math.max(
      1,
      Math.ceil(
        String(post.body)
          .replace(/https?:\/\/\S+/g, "")
          .split(/\s+/).length / 200,
      ),
    );
  const articleUrl = (post) => `article.html?post=${encodeURIComponent(post.id)}`;
  function makeCard(post, heading = "h2") {
    const card = el("article", undefined, "blog-card"),
      imageLink = el("a", undefined, "blog-image-link"),
      image = el("img");
    imageLink.href = articleUrl(post);
    imageLink.setAttribute("aria-label", `Read ${post.title}`);
    image.src = imagePath(post.image);
    image.alt = post.imageAlt || post.title;
    image.loading = "lazy";
    image.width = 1200;
    image.height = 675;
    imageLink.append(image);
    const box = el("div"),
      tag = el("p", post.category, "eyebrow"),
      title = el(heading),
      link = el("a", post.title);
    link.href = articleUrl(post);
    title.append(link);
    const meta = el(
      "p",
      [dateLabel(post.date), `${readingTime(post)} min read`].filter(Boolean).join(" · "),
      "article-meta",
    );
    const read = el("a", "Read article ↗", "text-link");
    read.href = link.href;
    box.append(tag, title, meta, el("p", post.excerpt), read);
    card.append(imageLink, box);
    return card;
  }
  const results = document.querySelector("#blog-results");
  if (results) {
    const search = document.querySelector("#blog-search"),
      category = document.querySelector("#blog-category"),
      empty = document.querySelector("#blog-empty");
    const originalEmpty = [...empty.childNodes];
    function render() {
      const q = search.value.toLowerCase().trim();
      const visible = published.filter(
        (p) =>
          (category.value === "All topics" || p.category === category.value) &&
          `${p.title} ${p.excerpt} ${p.body}`.toLowerCase().includes(q),
      );
      results.replaceChildren(...visible.map((post) => makeCard(post)));
      empty.hidden = visible.length > 0;
      document.querySelector("#blog-count").textContent =
        `${visible.length} article${visible.length === 1 ? "" : "s"} found`;
      if (published.length && !visible.length) {
        empty.replaceChildren(
          el("h2", "No articles found."),
          el("p", "Try another topic or a different search."),
        );
      } else if (!published.length) empty.replaceChildren(...originalEmpty);
    }
    search.addEventListener("input", render);
    category.addEventListener("change", render);
    render();
  }
  const homepage = document.querySelector("#home-blog-posts");
  if (homepage)
    homepage.replaceChildren(...published.slice(0, 3).map((post) => makeCard(post, "h3")));
  const article = document.querySelector("#article");
  if (article) {
    const id = new URLSearchParams(window.location.search).get("post");
    const post = published.find((p) => p.id === id);
    article.replaceChildren();
    const back = el("a", "← Back to the journal", "text-link");
    back.href = "blog.html";
    article.append(back);
    if (!post) {
      article.append(
        el("h1", "Article not found"),
        el(
          "p",
          "This article may be a draft or no longer available. Explore the journal for published articles.",
        ),
      );
      return;
    }
    document.title = `${post.title} | TechSphere Hub Academy`;
    document.querySelector('meta[name="description"]').content = post.excerpt;
    document.querySelector('meta[property="og:title"]').content = post.title;
    document.querySelector('meta[property="og:description"]').content = post.excerpt;
    document.querySelector('meta[property="og:type"]').content = "article";
    document.querySelector('meta[property="og:image"]').content =
      `https://www.techspherehub.co.uk/${imagePath(post.image)}`;
    document.querySelector('link[rel="canonical"]').href =
      `https://www.techspherehub.co.uk/${articleUrl(post)}`;
    const cover = el("img", undefined, "article-cover");
    cover.src = imagePath(post.image);
    cover.alt = post.imageAlt || post.title;
    cover.width = 1200;
    cover.height = 675;
    article.append(
      el("p", post.category, "eyebrow"),
      el("h1", post.title),
      el(
        "p",
        [
          post.author || "TechSphere Hub Academy",
          dateLabel(post.date),
          `${readingTime(post)} min read`,
        ]
          .filter(Boolean)
          .join(" · "),
        "article-meta",
      ),
      cover,
    );
    const body = el("div", undefined, "article-body");
    window.TSHMarkdown.render(body, post.body);
    const headings = [...body.querySelectorAll("h2")];
    if (headings.length > 2) {
      const toc = el("nav", undefined, "article-toc");
      toc.setAttribute("aria-label", "In this article");
      toc.append(el("h2", "In this article"));
      const list = el("ol");
      for (const heading of headings) {
        const item = el("li"),
          link = el("a", heading.textContent);
        link.href = `#${heading.id}`;
        item.append(link);
        list.append(item);
      }
      toc.append(list);
      article.append(toc);
    }
    article.append(body);
    const end = el("div", undefined, "article-end");
    end.append(el("p", "Continue your next chapter.", "eyebrow"));
    const explore = el("a", "Explore our programmes ↗", "button");
    explore.href = "courses.html";
    end.append(explore);
    article.append(end);
  }
})();

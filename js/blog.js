'use strict';
(() => {
  const published = (window.TSH_POSTS || []).filter(p => p.status === 'published').sort((a,b) => b.date.localeCompare(a.date));
  const el = (tag, text, className) => { const e = document.createElement(tag); if (text !== undefined) e.textContent = text; if (className) e.className = className; return e; };
  function imagePath(path) { return typeof path === 'string' && /^images\/[\w/-]+\.(webp|png|jpe?g)$/i.test(path) ? path : 'images/learning-students.webp'; }
  function dateLabel(value) { const d = new Date(value + 'T12:00:00Z'); return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}); }
  const results = document.querySelector('#blog-results');
  if (results) {
    const search = document.querySelector('#blog-search'), category = document.querySelector('#blog-category');
    function render() {
      const q = search.value.toLowerCase().trim();
      const visible = published.filter(p => (category.value === 'All topics' || p.category === category.value) && `${p.title} ${p.excerpt} ${p.body}`.toLowerCase().includes(q));
      results.replaceChildren();
      for (const post of visible) {
        const card = el('article',undefined,'blog-card'), image = el('img'); image.src = imagePath(post.image); image.alt = post.imageAlt || post.title; image.loading = 'lazy';
        const box = el('div'), tag = el('p',post.category,'eyebrow'), title = el('h2'), link = el('a',post.title); link.href = `article.html?post=${encodeURIComponent(post.id)}`; title.append(link);
        const reading = Math.max(1,Math.ceil(String(post.body).split(/\s+/).length / 200));
        const meta = el('p',`${dateLabel(post.date)} · ${reading} min read`,'article-meta');
        const read = el('a','Read article ↗','text-link'); read.href = link.href;
        box.append(tag,title,meta,el('p',post.excerpt),read);card.append(image,box);results.append(card);
      }
      const empty = document.querySelector('#blog-empty'); empty.hidden = visible.length > 0;
      document.querySelector('#blog-count').textContent = published.length ? `${visible.length} article${visible.length === 1 ? '' : 's'} found` : '';
      if (published.length && !visible.length) {
        empty.replaceChildren(el('h2','No articles found.'),el('p','Try another topic or a different search.'));
      }
    }
    search.addEventListener('input',render); category.addEventListener('change',render); render();
  }
  const article = document.querySelector('#article');
  if (article) {
    const id = new URLSearchParams(window.location.search).get('post'); const post = published.find(p => p.id === id);
    article.replaceChildren();const back = el('a','← Back to the journal','text-link');back.href='blog.html';article.append(back);
    if (!post) { article.append(el('h1','Article not found'),el('p','This article may be a draft or no longer available. Explore the journal for published articles.'));return; }
    document.title = `${post.title} | TechSphere Hub Academy`;
    document.querySelector('meta[name="description"]').content = post.excerpt;
    document.querySelector('meta[property="og:title"]').content = post.title;
    document.querySelector('meta[property="og:description"]').content = post.excerpt;
    document.querySelector('meta[property="og:type"]').content = 'article';
    document.querySelector('link[rel="canonical"]').href = `https://www.techspherehub.co.uk/article.html?post=${encodeURIComponent(post.id)}`;
    const cover = el('img',undefined,'article-cover');cover.src = imagePath(post.image);cover.alt = post.imageAlt || post.title;
    article.append(el('p',post.category,'eyebrow'),el('h1',post.title),el('p',`${post.author || 'TechSphere Hub Academy'} · ${dateLabel(post.date)}`,'article-meta'),cover);
    const body = el('div',undefined,'article-body');
    for (const block of String(post.body).split(/\n\s*\n/)) {
      const text = block.trim();if(!text)continue;
      if(text.startsWith('### '))body.append(el('h3',text.slice(4)));
      else if(text.startsWith('## '))body.append(el('h2',text.slice(3)));
      else if(text.split('\n').every(line => line.startsWith('- '))) { const list=el('ul');text.split('\n').forEach(line=>list.append(el('li',line.slice(2))));body.append(list); }
      else body.append(el('p',text));
    }
    article.append(body);
  }
})();

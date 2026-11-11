'use strict';
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  document.body.classList.remove('menu-open');
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.style.setProperty('--menu-top', `${document.querySelector('.site-header').getBoundingClientRect().bottom}px`);
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  document.body.classList.toggle('menu-open', open);
  if (open) navigation.querySelector('a')?.focus();
});
navigation?.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navigation?.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
  if (e.key === 'Tab' && navigation?.classList.contains('is-open')) {
    const links = [...navigation.querySelectorAll('a')];
    const first = menuButton, last = links.at(-1);
    if (e.shiftKey && document.activeElement === links[0]) { e.preventDefault(); first.focus(); return; }
    if (!e.shiftKey && document.activeElement === first) { e.preventDefault(); links[0].focus(); return; }
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
window.matchMedia('(min-width: 851px)').addEventListener('change', e => { if (e.matches) closeMenu(); });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(card => {
    card.hidden = button.dataset.filter !== 'All programmes' && card.dataset.category !== button.dataset.filter;
    if (!card.hidden) count++;
  });
  document.querySelector('#course-count').textContent = `${count} programme${count === 1 ? '' : 's'} to explore`;
}));

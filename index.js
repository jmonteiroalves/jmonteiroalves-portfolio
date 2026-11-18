/* Screenshot viewers: swap the active image without a page reload. */
const viewers = document.querySelectorAll('[data-shot]');

viewers.forEach((viewer) => {
  const tabs = Array.from(viewer.querySelectorAll('.shot__tab'));
  const image = viewer.querySelector('.shot__image');
  const note = viewer.querySelector('.shot__note');
  const count = viewer.querySelector('.shot__count');

  if (!tabs.length || !image || !note) return;

  const select = (tab) => {
    tabs.forEach((item) => item.setAttribute('aria-pressed', String(item === tab)));
    image.src = tab.dataset.src;
    image.alt = tab.dataset.alt;
    note.textContent = tab.dataset.note;
    if (count) count.textContent = `${tabs.indexOf(tab) + 1} / ${tabs.length}`;
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => select(tab));
  });

  viewer.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

    const current = tabs.findIndex((tab) => tab.getAttribute('aria-pressed') === 'true');
    if (current === -1) return;

    event.preventDefault();
    const offset = event.key === 'ArrowRight' ? 1 : -1;
    const next = tabs[(current + offset + tabs.length) % tabs.length];
    next.focus();
    select(next);
  });
});

/* Reveal the back-to-top control after the first screen. */
const toTop = document.querySelector('.to-top');

if (toTop) {
  const updateToTop = () => {
    toTop.classList.toggle('is-visible', window.scrollY > 640);
  };

  updateToTop();
  window.addEventListener('scroll', updateToTop, { passive: true });
}

/* Keep the copyright year current. */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

/* Warm the cache for the alternate screenshots after first paint. */
const preloadScreens = () => {
  document.querySelectorAll('.shot__tab').forEach((tab) => {
    const image = new Image();
    image.src = tab.dataset.src;
  });
};

if ('requestIdleCallback' in window) {
  window.requestIdleCallback(preloadScreens, { timeout: 3000 });
} else {
  window.setTimeout(preloadScreens, 2000);
}

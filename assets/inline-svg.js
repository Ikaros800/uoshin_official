
document.addEventListener('DOMContentLoaded', async () => {
  const targets = document.querySelectorAll('[data-inline-svg]');

  for (const el of targets) {
    const src = el.getAttribute('data-inline-svg');
    if (!src) continue;

    try {
      const res = await fetch(src, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const svgText = await res.text();
      el.innerHTML = svgText;

      const svg = el.querySelector('svg');
      if (svg) {
        svg.removeAttribute('width');
        svg.removeAttribute('height');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');
      }
    } catch (e) {
      console.error('SVG読み込み失敗:', src, e);
    }
  }
});


// 年号
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// ハンバーガー
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');

function closeNav(){
  nav.classList.remove('is-open');
  toggle.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('nav-open', open);
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });
}

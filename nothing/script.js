(function(){
  const body = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const STORAGE_KEY = 'site-theme';

  function applyTheme(theme){
    if(theme === 'dark') body.setAttribute('data-theme','dark');
    else body.removeAttribute('data-theme');
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function initTheme(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved){ applyTheme(saved); return; }
    // use prefers-color-scheme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  toggle.addEventListener('click', ()=>{
    const isDark = body.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  // Fade-in on load / intersection observer for better perf
  function observeCards(){
    const cards = document.querySelectorAll('.card');
    const io = new IntersectionObserver((entries, obs) =>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          const el = entry.target;
          const idx = Array.from(cards).indexOf(el) + 1;
          el.setAttribute('data-visible', idx);
          obs.unobserve(el);
        }
      })
    },{threshold:0.12});
    cards.forEach(c => io.observe(c));
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initTheme();
    observeCards();
  });
})();
(() => {
  const button = document.querySelector('#burger');
  const nav = document.querySelector('#nav');
  if (!button || !nav) return;

  const closeMenus = () => {
    nav.querySelectorAll('.has-sub.open').forEach(item => item.classList.remove('open'));
    nav.querySelectorAll('.has-sub.manual-closed').forEach(item => item.classList.remove('manual-closed'));
    nav.querySelectorAll('.tg[aria-expanded="true"]').forEach(item => item.setAttribute('aria-expanded', 'false'));
    nav.classList.remove('manual');
  };

  const setMenuOpen = open => {
    nav.classList.toggle('show', open);
    document.body.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    if (!open) closeMenus();
  };

  button.addEventListener('click', () => {
    setMenuOpen(!nav.classList.contains('show'));
  });

  nav.addEventListener('click', event => {
    const toggle = event.target.closest('.tg');
    if (toggle) {
      const item = toggle.closest('.has-sub');
      nav.classList.add('manual');
      nav.querySelectorAll('.has-sub.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.classList.remove('manual-closed');
          const siblingToggle = openItem.querySelector('.tg');
          if (siblingToggle) siblingToggle.setAttribute('aria-expanded', 'false');
        }
      });
      const open = !item.classList.contains('open');
      item.classList.toggle('open', open);
      item.classList.toggle('manual-closed', !open);
      toggle.setAttribute('aria-expanded', String(open));
      return;
    }
    if (event.target.closest('a')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('#nav, #burger')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('show')) {
      setMenuOpen(false);
      button.focus();
    }
  });
})();

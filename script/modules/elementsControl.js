const burger = document.querySelector('.burger');
const page = document.querySelector('html, body');
const anchors = document.querySelectorAll('.menu-item__link[href*="#"]');
const nav = document.querySelector('.header__navigation');
const callback = document.querySelector('.header__callback');
const header = document.querySelector('.header');

const handleButtonClicks = () => {
  document.addEventListener('click', e => {
    if (e.target.matches('button')) {
      e.target.focus()
    }
  });
};

const handleBurgerClicks = () => {
  let ticking = false;

  burger.addEventListener('click', e => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        burger.classList.toggle('active');
        document.body.classList.toggle('lock');
        ticking = false;
      });
      ticking = true;
    }

    nav.classList.toggle('header__navigation_open');
    header.classList.toggle('header_zindex');
    callback.classList.toggle('header__callback_visible');

    let overlay = document.querySelector('.mobile-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.classList.add('mobile-overlay');
      header.insertAdjacentElement('afterend', overlay);
    } else {
      overlay.remove();
    }
  });
};


const handleAnchorClicks = () => {
  anchors.forEach(anchor => anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    page.scroll({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }));
};

export {
  handleButtonClicks,
  handleBurgerClicks,
  handleAnchorClicks,
};

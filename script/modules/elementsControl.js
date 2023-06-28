const burger = document.querySelector('.burger');
const page = document.querySelector('html, body');
const anchors = document.querySelectorAll('.menu-item__link[href*="#"]');

const handleButtonClicks = () => {
  document.addEventListener('click', e => {
    if (e.target.matches('button')) {
      e.target.focus()
    }
  });
};

const handleBurgerClicks = () => {
  burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
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

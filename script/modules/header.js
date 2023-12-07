const createHeader = () => {
  // Create elements
  const header = document.createElement('header');
  header.className = 'header';

  const container = document.createElement('div');
  container.className = 'container header__container';

  const burger = document.createElement('a');
  burger.className = 'header__burger burger';
  burger.tabIndex = '0';

  const burgerSpan = document.createElement('span');
  burgerSpan.className = 'burger__span';

  const logoLink = document.createElement('a');
  logoLink.href = '../../index.html';
  logoLink.className = 'header__link';

  const logoImg = document.createElement('img');
  logoImg.src = '../styles/header/img/logo.svg';
  logoImg.alt = 'logo';
  logoImg.className = 'header__logo';

  const nav = document.createElement('nav');
  nav.className = 'header__navigation';

  const ul = document.createElement('ul');
  ul.className = 'header__list menu-list';

  const menuItems = [
    { href: '/index.html#halls', text: 'Залы' },
    { href: '/index.html#about-us', text: 'О нас' },
    { href: '/index.html#booking', text: 'Бронь' },
    { href: '/index.html#feedbacks', text: 'Отзывы' },
    { href: '#contacts', text: 'Контакты' },
  ];

  for (const item of menuItems) {
    const li = document.createElement('li');
    li.className = 'menu-list__item menu-item';

    const a = document.createElement('a');
    a.href = item.href;
    a.className = 'menu-item__link';
    a.textContent = item.text;

    li.appendChild(a);
    ul.appendChild(li);
  }

  const callbackButton = document.createElement('button');
  callbackButton.type = 'button';
  callbackButton.className = 'header__callback';
  callbackButton.textContent = 'Заказать звонок';

  // Append elements
  burger.appendChild(burgerSpan);
  logoLink.appendChild(logoImg);
  container.appendChild(burger);
  container.appendChild(logoLink);
  nav.appendChild(ul);
  container.appendChild(nav);
  container.appendChild(callbackButton);
  header.appendChild(container);

  document.body.insertBefore(header, document.body.firstChild);

  return {
    header,
    callbackButton,
  }
};

const { header, callbackButton } = createHeader();


export {
  createHeader,
  header,
  callbackButton,
}

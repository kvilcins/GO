const createBanner = () => {
  // Создание элемента 'section' и назначение класса
  let sectionBanner = document.createElement('section');
  sectionBanner.className = 'main-banner';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container main-banner__container';
  sectionBanner.appendChild(divContainer);

  // Создание элемента 'div' и назначение класса
  let divTextWrap = document.createElement('div');
  divTextWrap.className = 'main-banner__text-wrap main-wrap';
  divContainer.appendChild(divTextWrap);

  // Создание элемента 'p' и назначение класса
  let pGameOver = document.createElement('p');
  pGameOver.className = 'main-wrap__item main-wrap__item_uppercase';
  pGameOver.textContent = 'Game Over';
  divTextWrap.appendChild(pGameOver);

  // Создание элемента 'h1' и назначение класса
  let h1 = document.createElement('h1');
  h1.className = 'main-wrap__item main-wrap__item_padding';
  h1.textContent = 'Новый формат игр и отдыха';
  divTextWrap.appendChild(h1);

  // Создание элемента 'div' и назначение класса
  let divAdvantages = document.createElement('div');
  divAdvantages.className = 'main-wrap__advantages advantages';
  divTextWrap.appendChild(divAdvantages);

  // Создание элемента 'div' и назначение класса
  let divWrap1 = document.createElement('div');
  divWrap1.className = 'advantages__wrap advantages-text';
  divAdvantages.appendChild(divWrap1);

  // Создание элемента 'p' и назначение класса
  let p4 = document.createElement('p');
  p4.className = 'advantages-text__item advantages-text__item_purple';
  p4.textContent = '4';
  divWrap1.appendChild(p4);

  // Создание элемента 'p' и назначение класса
  let pTheme = document.createElement('p');
  pTheme.className = 'advantages-text__item';
  pTheme.textContent = 'Тематических зала';
  divWrap1.appendChild(pTheme);

  // Создание элемента 'div' и назначение класса
  let divWrap2 = document.createElement('div');
  divWrap2.className = 'advantages__wrap advantages-text';
  divAdvantages.appendChild(divWrap2);

  // Создание элемента 'p' и назначение класса
  let pNew = document.createElement('p');
  pNew.className = 'advantages-text__item advantages-text__item_small-caps';
  pNew.textContent = 'new';
  divWrap2.appendChild(pNew);

  // Создание элемента 'p' и назначение класса
  let pApparatus = document.createElement('p');
  pApparatus.className = 'advantages-text__item';
  pApparatus.textContent = 'Новейшая аппаратура';
  divWrap2.appendChild(pApparatus);

  // Создание элемента 'a' и назначение класса
  let aBooking = document.createElement('a');
  aBooking.href = '#booking';
  aBooking.className = 'main-wrap__anchor';
  divTextWrap.appendChild(aBooking);

  // Создание элемента 'button' и назначение класса
  let button = document.createElement('button');
  button.type = 'button';
  button.className = 'main-wrap__button';
  button.textContent = 'Забронировать';
  aBooking.appendChild(button);

  // Создание элемента 'a' и назначение класса
  let aEntertainment = document.createElement('a');
  aEntertainment.href = '#entertainment';
  aEntertainment.className = 'main-wrap__down down-icon';
  divTextWrap.appendChild(aEntertainment);

  // Создание элемента 'svg' и назначение атрибутов
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '97');
  svg.setAttribute('height', '97');
  svg.setAttribute('viewBox', '0 0 97 97');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttribute('class', 'down-icon__svg');
  aEntertainment.appendChild(svg);

  // Создание элемента 'circle' и назначение атрибутов
  let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '48.5');
  circle.setAttribute('cy', '48.5');
  circle.setAttribute('r', '48');
  circle.setAttribute('class', 'down-icon__circle');
  svg.appendChild(circle);

  // Создание элемента 'rect' и назначение атрибутов
  let rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect1.setAttribute('x', '34.4255');
  rect1.setAttribute('y', '43.9162');
  rect1.setAttribute('width', '1.82001');
  rect1.setAttribute('height', '20.0201');
  rect1.setAttribute('transform', 'rotate(-44.9975 34.4255 43.9162)');
  rect1.setAttribute('class', 'down-icon__rect');
  svg.appendChild(rect1);

  // Создание элемента 'rect' и назначение атрибутов
  let rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect2.setAttribute('x', '48.5807');
  rect2.setAttribute('y', '58.0737');
  rect2.setAttribute('width', '1.82001');
  rect2.setAttribute('height', '20.0201');
  rect2.setAttribute('transform', 'rotate(-134.997 48.5807 58.0737)');
  rect2.setAttribute('class', 'down-icon__rect');
  svg.appendChild(rect2);

  // Вставка элемента 'section' в 'main'
  return { sectionBanner };
};

const { sectionBanner } = createBanner();


export {
  createBanner,
  sectionBanner,
};

const createAboutUs = () => {
  // Создание элемента 'section' и назначение класса и id
  let sectionAboutUs = document.createElement('section');
  sectionAboutUs.className = 'about-us';
  sectionAboutUs.id = 'about-us';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionAboutUs.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'about-us__title';
  h2.textContent = 'О нас';
  divContainer.appendChild(h2);

  // Создание элемента 'div' и назначение класса
  let divFlexWrapper = document.createElement('div');
  divFlexWrapper.className = 'about-us__flex-wrapper flex-wrapper';
  divContainer.appendChild(divFlexWrapper);

  // Создание элемента 'div' и назначение класса
  let divFlexImg = document.createElement('div');
  divFlexImg.className = 'flex-wrapper__img flex-img';
  divFlexWrapper.appendChild(divFlexImg);

  // Создание элементов 'div' для изображений
  let imgItems = ['vr', 'games', 'fifa', 'pad', 'controller', 'karaoke', 'vr2'];
  for (let item of imgItems) {
    let div = document.createElement('div');
    div.className = `flex-img__item flex-img__item_${item}`;
    divFlexImg.appendChild(div);
  }

  // Создание элемента 'div' и назначение класса
  let divBlockquoteText = document.createElement('div');
  divBlockquoteText.className = 'flex-wrapper__text blockquote-text';
  divFlexWrapper.appendChild(divBlockquoteText);

  // Создание элементов 'p' для описания
  let descriptions = [
    'Для наших гостей мы создали концептуально новое игровое пространство виртуальной реальности в центральной части города.',
    'Каждый день мы стараемся создавать для вас самую лучшую игровую атмосферу и радовать Вас топовыми игровыми разработками со всего мира.'
  ];
  for (let description of descriptions) {
    let p = document.createElement('p');
    p.className = 'blockquote-text__description';
    p.textContent = description;
    divBlockquoteText.appendChild(p);
  }

  // Создание элемента 'blockquote' и назначение класса
  let blockquote = document.createElement('blockquote');
  blockquote.className = 'flex-wrapper__blockquote flex-wrapper__blockquote-clearfix blockquote';
  divFlexWrapper.appendChild(blockquote);

  // Создание элемента 'p' и назначение класса
  let pQuote = document.createElement('p');
  pQuote.className = 'blockquote__quote quote';
  blockquote.appendChild(pQuote);

  // Создание элемента 'span' и назначение класса
  let spanQuote = document.createElement('span');
  spanQuote.className = 'quote__span quote__span_width';
  pQuote.appendChild(spanQuote);

  // Создание элемента 'span' и назначение класса
  let spanQuoteEn = document.createElement('span');
  spanQuoteEn.lang = 'en';
  spanQuoteEn.className = 'quote__span';
  spanQuoteEn.textContent = 'GAME OVER';
  spanQuote.appendChild(spanQuoteEn);

  // Создание элемента 'span' и назначение класса
  let spanQuoteText = document.createElement('span');
  spanQuoteText.textContent = ' — это место незабываемых впечатлений';
  spanQuote.appendChild(spanQuoteText);

  // Создание элемента 'cite' и назначение класса
  let cite = document.createElement('cite');
  cite.className = 'blockquote__cite cite';
  blockquote.appendChild(cite);

  // Создание элемента 'img' и назначение атрибутов
  let img = document.createElement('img');
  img.alt = 'Фотография Аркадия Абакина';
  img.className = 'cite__img';
  img.src = 'styles/cite/img/creators-icon.png';
  cite.appendChild(img);

  // Создание элемента 'span' и назначение класса
  let spanCite = document.createElement('span');
  spanCite.className = 'cite__ceo';
  spanCite.textContent = 'Аркадий Абакин, создатель игровой территории GAME OVER';
  cite.appendChild(spanCite);

  return { sectionAboutUs };
}

const { sectionAboutUs } = createAboutUs();

export {
  createAboutUs,
  sectionAboutUs,
}

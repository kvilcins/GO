const createHalls = () => {
  // Создание элемента 'section' и назначение класса и id
  let sectionHalls = document.createElement('section');
  sectionHalls.className = 'halls';
  sectionHalls.id = 'halls';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionHalls.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'halls__title';
  h2.textContent = 'Наши залы';
  divContainer.appendChild(h2);

  // Создание элемента 'ul' и назначение класса
  let ul = document.createElement('ul');
  ul.className = 'halls__list';
  divContainer.appendChild(ul);

  let items = [
    {class: 'halls__item_80s', text: '80’s vibes', link: '/rooms.js/rooms/80s.html'},
    {class: 'halls__item_star-wars', text: 'Star wars', link: '/rooms.js/rooms/star-wars.html'},
    {class: 'halls__item_wild-west', text: 'Wild west', link: '/rooms.js/rooms/wild-west.html'},
    {class: 'halls__item_neon-style', text: 'Neon style', link: '/rooms.js/rooms/neon-style.html'}
  ];

  for (let item of items) {
    let li = document.createElement('li');
    li.className = `halls__item ${item.class} card`;
    ul.appendChild(li);

    let p = document.createElement('p');
    p.setAttribute('lang', 'en');
    p.className = 'card__description';
    p.textContent = item.text;
    li.appendChild(p);

    // Добавление обработчика событий 'click' к элементу списка
    li.addEventListener('click', () => {
      window.open(item.link, '_self'); // Открывает ссылку в новой вкладке
    });

    // Добавление стиля 'cursor: pointer;' к элементу списка
    li.style.cursor = 'pointer';
  }

  // Вставка элемента 'section' в 'body'
  return { sectionHalls }
};

const { sectionHalls } = createHalls();

export {
  createHalls,
  sectionHalls,
}


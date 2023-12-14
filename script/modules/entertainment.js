const createEntertainment= () => {
  // Создание элемента 'section' и назначение класса и id
  let sectionEntertainment = document.createElement('section');
  sectionEntertainment.className = 'entertainment';
  sectionEntertainment.id = 'entertainment';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionEntertainment.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'entertainment__title';
  h2.textContent = 'У нас есть все для классного отдыха с друзьями!';
  divContainer.appendChild(h2);

  // Создание элемента 'ul' и назначение класса
  let ul = document.createElement('ul');
  ul.className = 'entertainment__list';
  divContainer.appendChild(ul);

  // Массив с данными для элементов списка
  let items = [
    {class: 'entertainment__item_vr', text: 'VR очки'},
    {class: 'entertainment__item_audio', text: 'Аудио-система 5.1 с\n отличным звуком'},
    {class: 'entertainment__item_karaoke', text: 'Караоке (4 микрофона)'},
    {class: 'entertainment__item_games', text: 'Настольные игры'},
    {class: 'entertainment__item_movies', text: 'Кино-сервисы Netflix, IVI,\n MegoGo, КиноПоиск, Okko'},
    {class: 'entertainment__item_ps', text: 'PlayStation 5'}
  ];

  // Создание элементов списка
  for (let item of items) {
    let li = document.createElement('li');
    li.className = `entertainment__item ${item.class} entertainment-card`;
    ul.appendChild(li);

    let p = document.createElement('p');
    p.className = 'entertainment-card__description';
    p.textContent = item.text;
    li.appendChild(p);
  }

  return { sectionEntertainment }
};

const { sectionEntertainment } = createEntertainment();

export {
  createEntertainment,
  sectionEntertainment,
}

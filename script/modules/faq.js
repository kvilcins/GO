const createFAQ = () => {
// Создание элемента 'section' и назначение класса и id
  let sectionFaq = document.createElement('section');
  sectionFaq.className = 'faq';
  sectionFaq.id = 'faq';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionFaq.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'faq__title';
  h2.textContent = 'Частые вопросы';
  divContainer.appendChild(h2);

  // Создание элемента 'ul' и назначение класса
  let ul = document.createElement('ul');
  ul.className = 'faq__list';
  divContainer.appendChild(ul);

  // Список вопросов и ответов
  const faqItems = [
    {
      question: 'Можно ли забронировать комнату онлайн?',
      answer: 'Да, можно воспользоваться нашей формой бронирования.',
      isPurple: true
    },
    {
      question: 'Могут ли мне вернуть деньги за бронь?',
      answer: 'Да, позвоните нам по номеру телефона 8 (950) 930 - 28 - 93 или напишите на почту GameOver@gmail.com',
      isPurple: false
    },
    {
      question: 'Какая комната самая популярная?',
      answer: 'Самая популярная комната - StarWars, к нам приходит очень много фанатов этой саги.',
      isPurple: true
    },
    {
      question: 'Как получить VIP карту?',
      answer: 'Вы можете позвонить нам по номеру телефона 8 (950) 930 - 28 - 93 или написать на почту GameOver@gmail.com',
      isPurple: false
    },
    {
      question: 'Сколько по времени занимает одна бронь?',
      answer: 'Одна бронь - это 3 часа, оплата производится пакетом независимо от количества гостей.',
      isPurple: true
    }
  ];

  /// Создание списка элементов 'li' с классами и содержимым
  faqItems.forEach((item, index) => {
    let li = document.createElement('li');
    li.className = `faq__item faq-list ${item.isPurple ? 'faq-list_purple' : 'faq-list_white'}`;

    let button = document.createElement('button');
    button.className = `faq-list__button ${index % 2 !== 0 ? 'faq-list__button_purple' : ''}`;
    button.textContent = item.question;

    // Создание элемента 'svg' для иконки
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '46');
    svg.setAttribute('height', '46');
    svg.setAttribute('viewBox', '0 0 46 46');
    svg.setAttribute('fill', 'currentColor');
    svg.setAttribute('class', `faq-list__svg ${item.isPurple ? 'faq-list__svg_purple' : 'faq-list__svg_white'}`);

    let path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M22.8305 14H23.5085V34H22.8305V14Z');
    path1.setAttribute('class', `faq-list__path ${item.isPurple ? 'faq-list__path_purple' : 'faq-list__path_white'}`);

    let path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M13 24.1695V23.4915H33V24.1695H13Z');
    path2.setAttribute('class', `faq-list__path ${item.isPurple ? 'faq-list__path_purple' : 'faq-list__path_white'}`);

    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', '23');
    circle.setAttribute('cy', '23');
    circle.setAttribute('r', '22.5');
    circle.setAttribute('stroke', item.isPurple ? '#6C0287' : 'white');
    circle.setAttribute('stroke-width', '2');

    svg.appendChild(path1);
    svg.appendChild(path2);
    svg.appendChild(circle); // Добавление элемента <circle> в <svg>
    button.appendChild(svg);

    let wrapper = document.createElement('div');
    wrapper.className = 'faq-list__wrapper';
    let desc = document.createElement('p');
    desc.className = 'faq-list__desc';
    desc.textContent = item.answer;

    wrapper.appendChild(desc);
    li.appendChild(button);
    li.appendChild(wrapper);
    ul.appendChild(li);
  });


  return { sectionFaq }
}

const { sectionFaq } = createFAQ();

export {
  createFAQ,
  sectionFaq,
}

let createContactInfo = () => {
  const mainElement = document.createElement('main');
  document.body.appendChild(mainElement);

  const section = document.createElement('section');
  section.className = 'contact-info';
  mainElement.appendChild(section);

  const container = document.createElement('div');
  container.className = 'container';
  section.appendChild(container);

  let contactInfo = {
    title: 'Контактная информация',
    description: 'Наша компания всегда рада слышать ваши отзывы и предложения.',
    items: [
      {
        title: 'Адрес',
        description: 'г. Москва, ул. Усачёва, 29 к3'
      },
      {
        title: 'Телефон',
        description: '8 (950) 930 - 28 - 93'
      },
      {
        title: 'Email',
        description: 'GameOver@gmail.com'
      },
      {
        title: 'Реквизиты',
        description: 'ООО "Пример", ИНН 1234567890, КПП 123456789, ОГРН 1234567890123, БИК 123456789, р/с 12345678901234567890 в банке "Пример Банк", к/с 12345678901234567890'
      },
      {
        title: 'Как доехать',
        description: [
          {
            subtitle: 'На машине',
            description: 'Если вы едете на машине, вы можете взять ул. Усачёва из центра города. Наш офис находится в здании 29 к3.'
          },
          {
            subtitle: 'На общественном транспорте',
            description: 'Если вы пользуетесь общественным транспортом, вы можете доехать до нас на автобусе номер 123 или трамвае номер 456. Остановка называется "Усачёва".'
          }
        ]
      }
    ]
  };

  let h1 = document.createElement('h1');
  h1.textContent = contactInfo.title;
  h1.className = 'contact-info__title';
  container.appendChild(h1);

  let p = document.createElement('p');
  p.textContent = contactInfo.description;
  p.className = 'contact-info__description';
  p.style = 'text-align: center';
  container.appendChild(p);

  let div = document.createElement('div');
  div.className = 'contact-info__wrap';
  container.appendChild(div);

  contactInfo.items.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.className = 'contact-info__item';
    div.appendChild(itemDiv);

    let itemTitle = document.createElement('p');
    itemTitle.textContent = item.title;
    itemTitle.className = 'contact-info__item-title contact-info__item-title--bold';
    itemDiv.appendChild(itemTitle);

    if (Array.isArray(item.description)) {
      item.description.forEach(subItem => {
        let itemSubtitle = document.createElement('h3');
        itemSubtitle.textContent = subItem.subtitle;
        itemSubtitle.className = 'contact-info__item-subtitle';
        itemDiv.appendChild(itemSubtitle);

        let itemDescription = document.createElement('p');
        itemDescription.textContent = subItem.description;
        itemDescription.className = 'contact-info__item-description';
        itemDiv.appendChild(itemDescription);
      });
    } else {
      let itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;
      itemDescription.className = 'contact-info__item-description';
      itemDiv.appendChild(itemDescription);
    }
  });
};

createContactInfo();

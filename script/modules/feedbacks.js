const createFeedbacks = () => {
  // Создание элемента 'section' и назначение класса и id
  let sectionFeedbacks = document.createElement('section');
  sectionFeedbacks.className = 'feedbacks';
  sectionFeedbacks.id = 'feedbacks';

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionFeedbacks.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'feedbacks__title';
  h2.textContent = 'Отзывы посетителей';
  divContainer.appendChild(h2);

  // Создание элемента 'ul' и назначение класса
  let ul = document.createElement('ul');
  ul.className = 'feedbacks__list';
  divContainer.appendChild(ul);

  // Создание элементов 'li' для отзывов
  let feedbacks = [
    {
      img: 'styles/feedbacks-card/img/maxim.png',
      name: 'Макс Самойлов',
      review: 'Отмечали здесь день рождения с компанией друзей, все было очень круто! VR очки это просто бомба, никогда еще я не был в таком полном игровом погружении. Сервис на высоте!'
    },
    {
      img: 'styles/feedbacks-card/img/oksana.png',
      name: 'Оксана Григорьева',
      review: 'Были в комнате Дикий Запад, пели в караоке под Шакиру, отличный получился корпоратив! У нас в городе больше нет подобных заведений'
    },
    {
      img: 'styles/feedbacks-card/img/nikita.png',
      name: 'Никита Ященко',
      review: 'Немного подвисала игра в VR очках, а так все норм. Крутое оформление комнаты в стиле звездных войн, попал в атмосферу космоса'
    }
  ];
  for (let feedback of feedbacks) {
    let li = document.createElement('li');
    li.className = 'feedbacks__item feedbacks-card';
    ul.appendChild(li);

    let figure = document.createElement('figure');
    figure.className = 'feedbacks-card__picture-wrap';
    li.appendChild(figure);

    let img = document.createElement('img');
    img.alt = `Фото ${feedback.name}`;
    img.className = 'feedbacks-card__img';
    img.src = feedback.img; // Замените на реальный путь к изображению
    figure.appendChild(img);

    let figcaption = document.createElement('figcaption');
    figcaption.className = 'feedbacks-card__description';
    figcaption.textContent = feedback.name;
    figure.appendChild(figcaption);

    let p = document.createElement('p');
    p.className = 'feedbacks-card__review';
    p.textContent = feedback.review;
    li.appendChild(p);
  }

  return { sectionFeedbacks };
}

const { sectionFeedbacks } = createFeedbacks();

export {
  createFeedbacks,
  sectionFeedbacks,
}

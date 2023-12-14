const createDescription = () => {

  const pageData = {
    'aboutUs': {
      sectionClass: 'about-description',
      h1Text: 'О компании Game Over',
      h1Class: 'about-description__h1',
      pClass: 'about-description__text',
      pText: 'GAME OVER - это не просто игровая территория, это концептуально новое пространство виртуальной реальности, расположенное в центре города. Созданное Аркадием Абакиным, это место предлагает незабываемые впечатления для всех гостей. Каждый день мы работаем над созданием лучшей игровой атмосферы, предлагая вам лучшие игровые разработки со всего мира. Наша цель - радовать вас и делать ваш опыт незабываемым. Добро пожаловать в GAME OVER!',
    },
    'booking': {
      sectionClass: 'booking-description',
      h1Text: 'Модуль бронирования Game Over',
      h1Class: 'booking-description__h1',
      pClass: 'booking-description__text',
      pText: 'Воспользуйтесь модулем бронирования и мы вам перезвоним!',
    },
    'feedbacks': {
      sectionClass: 'feedbacks-description',
      h1Text: 'Отзывы наших клиентов',
      h1Class: 'feedbacks-description__h1',
      pClass: 'feedbacks-description__text',
      pText: 'Отзывы наших клиентов',
    },
    'rooms': {
      sectionClass: 'halls-description',
      h1Text: 'Игровые комнаты Game Over',
      h1Class: 'halls-description__h1',
      pClass: 'halls-description__text',
      pText: 'Погрузитесь в незабываемую атмосферу Америки 80-х годов, наслаждаясь стилевой музыкой и ретро-атрибутами. Оденьтесь ярко, приходите с хорошим настроением и устройте незабываемую вечеринку! Затем встретьте вселенную STAR WARS в нашем игровом зале. Ощутите себя на планетах, где разворачивается история STAR WARS, и почувствуйте себя героем настоящей саги. После этого окунитесь в мир «Дикого Запада», где вы сможете примерить на себя образ ковбоя, надеть ковбойскую шляпу, кожаный жилет, ковбойские сапоги и даже прокатиться на лошади. Будьте готовы к приключениям, ведь вы можете оказаться одним из омерзительной восьмерки или отправиться в путь, чтобы освободить Джанго. И наконец, если вы любитель темных комнат, музыкального драйва и светящейся одежды, то наш игровой зал с неоновым светом, кислотным диджеем и фотолюминесцентными футболками - это то, что вам нужно. Здесь вы точно знаете, что сегодня надеть! Приходите и наслаждайтесь незабываемым опытом!',
    },
  }

  // Получаем текущий URL и определяем текущую комнату
  const currentPage = window.location.pathname.split('/').pop().split('.')[0];

  // Получаем данные для текущей комнаты
  const currentPageData = pageData[currentPage];

  if (!currentPageData) {
    console.error(`No data found for page: ${currentPage}`);
    return;
  }

  const mainElement = document.createElement('main');
  document.body.appendChild(mainElement);

  const section = document.createElement('section');
  section.className = currentPageData.sectionClass;
  mainElement.appendChild(section);

  const container = document.createElement('div');
  container.className = 'container';
  section.appendChild(container);

  const h1 = document.createElement('h1');
  h1.textContent = currentPageData.h1Text;
  h1.className = currentPageData.h1Class;
  container.appendChild(h1);

  const p = document.createElement('p');
  p.className = currentPageData.pClass;
  p.style = 'text-align: center';
  p.textContent = currentPageData.pText;
  container.appendChild(p);

  return { mainElement };
}

const { mainElement } = createDescription();

export {
  createDescription,
  mainElement,
}

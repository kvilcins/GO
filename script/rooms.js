import {createBackButton} from "./modules/backButton.js";

createBackButton();

const createRoomContent = () => {
  // Объект с данными для каждой комнаты
  const roomData = {
    '80s': {
      name: '80’s vibes',
      description: 'Вы окунетесь в незабываемую атмосферу Америки 80-х годов, стилевая музыка, кассеты и магнитофоны. Одевайтесь ярко, берите с собой хорошее настроение и устройте большую вечеринку!',
      imgSrc: '../styles/whats-in-wrapper/img/80s-whats-inside.png',
      backgroundImg: '../styles/room-banner/img/80s.png',
      text1: 'В комнате 80-х есть игровые автоматы, магнитофоны, виниловые пластинки и мини кинотеатр.',
      text2: 'Также вы можете выбрать игровую приставку, настольные игры, VR и караоке.',
      link: '80s.html',
    },
    'star-wars': {
      name: 'Star Wars',
      description: 'Здесь вы встретите атрибуты вселенной STAR WARS. Сможете ощутить себя на тех планетах, где разворачивается история STAR WARS и ощутить себя в роли героев наcтоящей саги.',
      imgSrc: '../styles/whats-in-wrapper/img/starwars.png',
      backgroundImg: '../styles/room-banner/img/starwars.png',
      text1: 'В комнате STAR WARS есть игровые зоны в виде космических кораблей, командных пунктов и космических планет.',
      text2: 'Так же вы сможете воспользоваться игровыми манипуляторами, приставками консолями или просто просмотреть любые серии саги на межпланетных экранах.',
      link: 'star-wars.html',
    },
    'wild-west': {
      name: 'Wild West',
      description: 'Ох этот замечательный мир «Дикого Запада». Здесь вы сможете примерить на себя ковбойскую шляпу, кожаный жилет, ковбойские сапоги и даже сесть верхом на лошадь. И не важно, вы будете одним из омерзительной восьмерки или отправитесь в путь освобождать Джанго.',
      imgSrc: '../styles/whats-in-wrapper/img/wildwest.png',
      backgroundImg: '../styles/room-banner/img/wildwest.png',
      text1: 'В комнате присутствует большое количество элементов из любимых историй дикого запада. Револьверы, кожаные вещи, шляпы, сапоги и многое другое.',
      text2: 'Вы сможете воспользоваться динамическими игровыми платформами в виде лошадей, старинного поезда или дома в стиле вестерна.',
      link: 'wild-west.html',
    },
    'neon-style': {
      name: 'Neon Style',
      description: 'Неоновый свет, кислотный диджей, кеды и фотолюминесценция футболки. Если вы любитель темных комнат, музыкального драйва и светящейся одежды, то вы точно знаете что сегодня надеть.',
      imgSrc: '../styles/whats-in-wrapper/img/neonstyle.png',
      backgroundImg: '../styles/room-banner/img/neonstyle.png',
      text1: 'Вы сможете встать у диджейского пульта и создать свой сет, который порадует остальных участников комнаты...или нет.',
      text2: 'В комнате также присутствует большое предметов с элементами фосфора, включая игровые консоли, стулья и диваны. Вы точно не потеряетесь внутри.',
      link: 'neon-style.html',
    }
  };

// Получаем текущий URL и определяем текущую комнату
  const currentRoom = window.location.pathname.split('/').pop().split('.')[0];

// Получаем данные для текущей комнаты
  const currentRoomData = roomData[currentRoom];

  if (!currentRoomData) {
    console.error(`No data found for room: ${currentRoom}`);
    return;
  }

  const body = document.body;

  const main = document.createElement('main');

  const roomBannerSection = document.createElement('section');
  roomBannerSection.classList.add('room-banner');
  roomBannerSection.style.backgroundImage = `url(${currentRoomData.backgroundImg})`;

  const roomBannerContainer = document.createElement('div');
  roomBannerContainer.classList.add('container', 'room-banner__container');

  const roomBannerH1 = document.createElement('h1');
  roomBannerH1.classList.add('room-banner__h1');
  roomBannerH1.textContent = currentRoomData.name;

  roomBannerContainer.appendChild(roomBannerH1);
  roomBannerSection.appendChild(roomBannerContainer);

  main.appendChild(roomBannerSection);

  const roomDescriptionSection = document.createElement('section');
  roomDescriptionSection.id = 'room-description';
  roomDescriptionSection.classList.add('room-description');

  const roomDescriptionContainer = document.createElement('div');
  roomDescriptionContainer.classList.add('container');

  const roomDescriptionP = document.createElement('p');
  roomDescriptionP.classList.add('room-description__description');
  roomDescriptionP.textContent = currentRoomData.description;

  roomDescriptionContainer.appendChild(roomDescriptionP);
  roomDescriptionSection.appendChild(roomDescriptionContainer);

  main.appendChild(roomDescriptionSection);

  const whatsInTheRoomSection = document.createElement('section');
  whatsInTheRoomSection.id = 'whats-in-there';
  whatsInTheRoomSection.classList.add('whats-in-there');

  const whatsInTheRoomContainer = document.createElement('div');
  whatsInTheRoomContainer.classList.add('container');

  const whatsInTheRoomTitle = document.createElement('h2');
  whatsInTheRoomTitle.classList.add('whats-in-there__title');
  whatsInTheRoomTitle.textContent = 'Что есть в комнате?';

  const whatsInTheRoomWrapper = document.createElement('div');
  whatsInTheRoomWrapper.classList.add('whats-in-there__wrapper', 'whats-in-wrapper');

  const whatsInTheRoomImage = document.createElement('img');
  whatsInTheRoomImage.src = currentRoomData.imgSrc;
  whatsInTheRoomImage.alt = '';
  whatsInTheRoomImage.classList.add('flex-wrapper__img');

  const whatsInTheRoomText = document.createElement('div');
  whatsInTheRoomText.classList.add('flex-wrapper__text', 'room-desc');

  const text1 = document.createElement('p');
  text1.classList.add('room-desc__p');
  text1.textContent = currentRoomData.text1;

  const text2 = document.createElement('p');
  text2.classList.add('room-desc__p');
  text2.textContent = currentRoomData.text2;

  whatsInTheRoomText.appendChild(text1);
  whatsInTheRoomText.appendChild(text2);

  whatsInTheRoomWrapper.appendChild(whatsInTheRoomImage);
  whatsInTheRoomWrapper.appendChild(whatsInTheRoomText);

  whatsInTheRoomContainer.appendChild(whatsInTheRoomTitle);
  whatsInTheRoomContainer.appendChild(whatsInTheRoomWrapper);

  whatsInTheRoomSection.appendChild(whatsInTheRoomContainer);

  main.appendChild(whatsInTheRoomSection);

  const otherRoomsSection = document.createElement('section');
  otherRoomsSection.id = 'other-rooms';
  otherRoomsSection.classList.add('other-rooms');

  const otherRoomsContainer = document.createElement('div');
  otherRoomsContainer.classList.add('container');

  const otherRoomsTitle = document.createElement('h2');
  otherRoomsTitle.classList.add('other-rooms__title');
  otherRoomsTitle.textContent = 'Другие комнаты';

  const otherRoomsList = document.createElement('ul');
  otherRoomsList.classList.add('other-rooms__list');

  // Filter out the current room from the roomData
  const otherRooms = Object.values(roomData).filter(room => room.name !== currentRoomData.name);

  // Use otherRooms to generate the list of other rooms
  otherRooms.forEach(room => {
    const roomItem = document.createElement('li');
    if (room.name && typeof room.name === 'string') {
      roomItem.classList.add('other-rooms__item', `other-rooms__item_${room.name.toLowerCase().replace(/\s/g, '-')}`, 'room-item');
    } else {
      console.error(`Invalid name found for room: ${room}`);
    }

    const roomDescription = document.createElement('p');
    roomDescription.classList.add('room-item__description');
    roomDescription.lang = 'en';
    roomDescription.textContent = room.name;

    roomItem.appendChild(roomDescription);
    otherRoomsList.appendChild(roomItem);

    // Add event listener
    roomItem.addEventListener('click', () => {
      console.log(`Вы выбрали комнату: ${room.name}`);
      window.open(room.link, '_self');
    });
  });

  otherRoomsContainer.appendChild(otherRoomsTitle);
  otherRoomsContainer.appendChild(otherRoomsList);

  otherRoomsSection.appendChild(otherRoomsContainer);

  main.appendChild(otherRoomsSection);

  body.appendChild(main);
};

createRoomContent();




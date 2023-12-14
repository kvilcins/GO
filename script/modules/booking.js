const createBooking = () => {
  // Создание элемента 'section' и назначение класса и id
  let sectionBooking = document.createElement('section');
  sectionBooking.className = 'booking';
  sectionBooking.id = 'booking';

  // Проверка текущего URL
  if (window.location.pathname === '/rooms.js/booking.html') {
    // Изменение стиля, если мы находимся на странице /rooms.js/booking.html
    sectionBooking.style.backgroundColor = 'var(--main-background-color, #1B1A1B)';
  }

  // Создание элемента 'div' и назначение класса
  let divContainer = document.createElement('div');
  divContainer.className = 'container';
  sectionBooking.appendChild(divContainer);

  // Создание элемента 'h2' и назначение класса
  let h2 = document.createElement('h2');
  h2.className = 'booking__title';
  h2.textContent = 'Забронировать зал просто';
  divContainer.appendChild(h2);

  // Создание элемента 'form' и назначение класса
  let form = document.createElement('form');
  form.className = 'booking__form form';
  form.action = 'https://jsonplaceholder.typicode.com/posts';
  form.method = 'POST';
  divContainer.appendChild(form);

  // Создание элемента 'fieldset' и назначение класса
  let fieldsetHalls = document.createElement('fieldset');
  fieldsetHalls.className = 'form__fieldset fieldset-halls';
  form.appendChild(fieldsetHalls);

  // Создание элемента 'legend' и назначение класса
  let legend = document.createElement('legend');
  legend.className = 'fieldset-halls__legend';
  legend.textContent = 'Выбери зал';
  fieldsetHalls.appendChild(legend);

  // Создание внутреннего 'fieldset' и назначение класса
  let innerFieldset = document.createElement('fieldset');
  innerFieldset.className = 'fieldset-halls__inner-fieldset rooms';
  fieldsetHalls.appendChild(innerFieldset);

  // Создание элементов 'label' и 'input' для каждого зала
  let halls = ['80s-vibes', 'star-wars', 'wild-west', 'neon-style'];
  let classes = ['rooms__input_80s', 'rooms__input_star-wars', 'rooms__input_wild-west', 'rooms__input_neon-style'];

  for (let i = 0; i < halls.length; i++) {
    let label = document.createElement('label');
    label.className = 'rooms__label';
    innerFieldset.appendChild(label);

    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'hall';
    input.value = halls[i];
    input.lang = 'en';
    input.className = 'rooms__input ' + classes[i];
    label.appendChild(input);
  }

  // Создание элемента 'div' и назначение класса
  let divWidthLimiting = document.createElement('div');
  divWidthLimiting.className = 'width-limiting';
  form.appendChild(divWidthLimiting);

  // Создание элемента 'fieldset' и назначение класса
  let fieldsetEntertainment = document.createElement('fieldset');
  fieldsetEntertainment.className = 'width-limiting__fieldset fieldset-entertainment';
  divWidthLimiting.appendChild(fieldsetEntertainment);

// Создание элемента 'legend' и назначение класса
  let legendEntertainment = document.createElement('legend');
  legendEntertainment.className = 'fieldset-entertainment__legend';
  legendEntertainment.textContent = 'Собери набор развлечений';
  fieldsetEntertainment.appendChild(legendEntertainment);

// Создание элемента 'fieldset' и назначение класса
  let fieldsetConsoles = document.createElement('fieldset');
  fieldsetConsoles.className = 'fieldset-entertainment__inner-fieldset consoles';
  fieldsetEntertainment.appendChild(fieldsetConsoles);

// Создание элемента 'legend' и назначение класса
  let legendConsoles = document.createElement('legend');
  legendConsoles.className = 'consoles__legend';
  legendConsoles.textContent = 'Приставка:';
  fieldsetConsoles.appendChild(legendConsoles);

// Создание элементов 'label' и 'input' для приставок
  let consoles = ['playstation', 'sega', 'xbox', 'dendy'];
  for (let console of consoles) {
    let label = document.createElement('label');
    label.className = 'consoles__label';
    let input = document.createElement('input');
    input.type = 'radio';
    input.name = 'console';
    input.value = console;
    input.lang = 'en';
    input.className = 'consoles__input';
    label.appendChild(input);
    label.appendChild(document.createTextNode(console.charAt(0).toUpperCase() + console.slice(1)));
    fieldsetConsoles.appendChild(label);
  }

  // Создание элемента 'fieldset' и назначение класса
  let fieldsetBoardGames = document.createElement('fieldset');
  fieldsetBoardGames.className = 'fieldset-entertainment__inner-fieldset board-games';
  fieldsetEntertainment.appendChild(fieldsetBoardGames);

// Создание элемента 'legend' и назначение класса
  let legendBoardGames = document.createElement('legend');
  legendBoardGames.className = 'board-games__legend';
  legendBoardGames.textContent = 'Настольные игры';
  fieldsetBoardGames.appendChild(legendBoardGames);

// Создание элементов 'label' и 'input' для настольных игр
  let games = ['jenga', 'monopoly', 'manchkin', 'alias'];
  for (let game of games) {
    let label = document.createElement('label');
    label.className = 'board-games__label';
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'games';
    input.value = game;
    input.lang = 'en';
    input.className = 'board-games__input';
    label.appendChild(input);
    label.appendChild(document.createTextNode(game.charAt(0).toUpperCase() + game.slice(1)));
    fieldsetBoardGames.appendChild(label);
  }

// Создание элемента 'fieldset' и назначение класса
  let fieldsetAdditional = document.createElement('fieldset');
  fieldsetAdditional.className = 'fieldset-entertainment__inner-fieldset additional';
  fieldsetEntertainment.appendChild(fieldsetAdditional);

// Создание элемента 'legend' и назначение класса
  let legendAdditional = document.createElement('legend');
  legendAdditional.className = 'additional__legend';
  legendAdditional.textContent = 'Дополнительно';
  fieldsetAdditional.appendChild(legendAdditional);

// Создание элементов 'label' и 'input' для дополнительных развлечений
  let additionals = ['karaoke', 'vr'];
  for (let additional of additionals) {
    let label = document.createElement('label');
    label.className = 'additional__label';
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'additional';
    input.value = additional;
    input.className = 'additional__input';
    label.appendChild(input);
    label.appendChild(document.createTextNode(additional.charAt(0).toUpperCase() + additional.slice(1)));
    fieldsetAdditional.appendChild(label);
  }

  // Создание элемента 'fieldset' и назначение класса
  let fieldsetDate = document.createElement('fieldset');
  fieldsetDate.className = 'width-limiting__fieldset date';
  divWidthLimiting.appendChild(fieldsetDate);

  // Создание элемента 'legend' и назначение класса
  let legendDate = document.createElement('legend');
  legendDate.className = 'date__legend';
  legendDate.textContent = 'Выбери дату и время';
  fieldsetDate.appendChild(legendDate);

  // Создание элемента 'div' и назначение класса
  let divDateLeft = document.createElement('div');
  divDateLeft.className = 'date__wrap date-left';
  fieldsetDate.appendChild(divDateLeft);

  // Создание элементов 'label' и 'select' для даты, времени и количества людей
  let selectNames = ['date', 'time', 'amount'];
  let selectClasses = ['date-left__select date-left__select_date', 'date-left__select date-left__select_time', 'date-left__select-amount'];
  let selectOptions = [['Дата', '19.10', '20.10', '21.10', '22.10', '23.10', '24.10'], ['Время', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'], ['Сколько человек', '2', '3', '4', '5', '6', '7']];

  for (let i = 0; i < selectNames.length; i++) {
    let label = document.createElement('label');
    label.className = `date-left__label`;
    if (selectNames[i] === 'amount') {
      label.className += ' date-left__label_amount';
    }
    divDateLeft.appendChild(label);

    let select = document.createElement('select');
    select.name = selectNames[i];
    select.className = selectClasses[i];
    label.appendChild(select);

    for (let j = 0; j < selectOptions[i].length; j++) {
      let option = document.createElement('option');
      option.value = selectOptions[i][j];
      option.textContent = selectOptions[i][j];
      select.appendChild(option);
    }
  }

// Создание элемента 'div' и назначение класса
  let divDateRight = document.createElement('div');
  divDateRight.className = 'date__wrap date-right';
  fieldsetDate.appendChild(divDateRight);

// Создание элементов 'label' и 'input' для имени, телефона, фамилии и электронной почты
  let inputLabels = ['Имя', 'Телефон', 'Фамилия', 'E-mail'];
  let inputNames = ['first-name', 'phone', 'last-name', 'email'];
  let inputTypes = ['text', 'tel', 'text', 'email'];
  let inputClasses = ['date-right__input date-right__input_firstname', 'date-right__input date-right__input_phone', 'date-right__input date-right__input_lastname', 'date-right__input date-right__input_email'];
  let inputRequired = [true, true, true, false];

  for (let i = 0; i < inputLabels.length; i++) {
    let label = document.createElement('label');
    label.className = `date-right__label`;
    label.textContent = inputLabels[i];
    divDateRight.appendChild(label);

    let input = document.createElement('input');
    input.type = inputTypes[i];
    input.name = inputNames[i];
    input.required = inputRequired[i];
    input.className = inputClasses[i];
    label.appendChild(input);

    if (inputNames[i] === 'phone') {
      input.pattern = '^\\+?[7-8]-?[0-9]{3}-?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$';
    }
  }

  // Создание элемента 'button' и назначение класса
  let button = document.createElement('button');
  button.type = 'submit';
  button.className = 'width-limiting__button';
  button.textContent = 'Забронировать';
  divWidthLimiting.appendChild(button);

  return { sectionBooking };
}

const { sectionBooking } = createBooking();

export {
  createBooking,
  sectionBooking,
}

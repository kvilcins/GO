const createBackButton = () => {
  const backWrapper = document.createElement('div');
  backWrapper.classList.add('back-wrapper');

  const container = document.createElement('div');
  container.classList.add('container');

  const link = document.createElement('a');
  link.href = '/index.html';
  link.classList.add('back-wrapper__button', 'button-back');

  const iconSpan = document.createElement('span');
  iconSpan.classList.add('button-back__icon');
  iconSpan.innerHTML = '&#129044;';

  const textSpan = document.createElement('span');
  textSpan.classList.add('button-back__text');
  textSpan.textContent = 'Вернуться назад';

  link.appendChild(iconSpan);
  link.appendChild(textSpan);
  container.appendChild(link);
  backWrapper.appendChild(container);

  // Находим элемент header
  const header = document.querySelector('header');

  // Вставляем созданную верстку после header
  header.insertAdjacentElement('afterend', backWrapper);
};

export {
  createBackButton,
}

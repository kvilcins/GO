import {header, callbackButton} from './header.js';

const createModal = () => {
  // Create elements
  const modalWrap = document.createElement('div');
  modalWrap.className = 'modal-wrap';

  const overlay = document.createElement('div');
  overlay.className = 'modal-wrap__overlay overlay';

  const modal = document.createElement('section');
  modal.setAttribute('aria-label', 'modal');
  modal.className = 'modal';

  const title = document.createElement('h2');
  title.className = 'modal__title';
  title.textContent = 'Заказать звонок';

  const closeButtonDiv = document.createElement('div');
  closeButtonDiv.className = 'modal__close';

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'modal__close-button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '42');
  svg.setAttribute('height', '42');
  svg.setAttribute('viewBox', '0 0 42 42');
  svg.setAttribute('fill', 'none');

  const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect1.setAttribute('y', '38.4407');
  rect1.setAttribute('width', '54.3632');
  rect1.setAttribute('height', '5.03363');
  rect1.setAttribute('rx', '2');
  rect1.setAttribute('transform', 'rotate(-45 0 38.4407)');
  rect1.setAttribute('fill', 'white');

  const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect2.setAttribute('x', '3.55957');
  rect2.setAttribute('width', '54.3632');
  rect2.setAttribute('height', '5.03363');
  rect2.setAttribute('rx', '2');
  rect2.setAttribute('transform', 'rotate(45 3.55957 0)');
  rect2.setAttribute('fill', 'white');

  // Create form
  const form = document.createElement('form');
  form.action = 'https://jsonplaceholder.typicode.com/posts';
  form.method = 'POST';
  form.className = 'modal__form callback-form';

  const fieldset = document.createElement('fieldset');
  fieldset.className = 'callback-form__fieldset callback-fieldset';

  const nameLabel = document.createElement('label');
  nameLabel.className = 'callback-fieldset__label';

  const nameSpan = document.createElement('span');
  nameSpan.className = 'callback-fieldset__span';
  nameSpan.textContent = 'Имя';

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'callback-first-name';
  nameInput.required = true;
  nameInput.className = 'callback-fieldset__input';

  nameLabel.appendChild(nameSpan);
  nameLabel.appendChild(nameInput);

  const phoneLabel = document.createElement('label');
  phoneLabel.className = 'callback-fieldset__label';

  const phoneSpan = document.createElement('span');
  phoneSpan.className = 'callback-fieldset__span';
  phoneSpan.textContent = 'Телефон';

  const phoneInput = document.createElement('input');
  phoneInput.type = 'tel';
  phoneInput.pattern = '^\\+?[7-8]-?[0-9]{3}-?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$';
  phoneInput.placeholder = '+7(___)___-__-__';
  phoneInput.name = 'callback-phone';
  phoneInput.required = true;
  phoneInput.className = 'callback-fieldset__input';

  phoneLabel.appendChild(phoneSpan);
  phoneLabel.appendChild(phoneInput);

  fieldset.appendChild(nameLabel);
  fieldset.appendChild(phoneLabel);

  const button = document.createElement('button');
  button.type = 'submit';
  button.className = 'callback-form__button';
  button.textContent = 'Позвонить мне';

  form.appendChild(fieldset);
  form.appendChild(button);

  // Append elements
  svg.appendChild(rect1);
  svg.appendChild(rect2);
  closeButton.appendChild(svg);
  closeButtonDiv.appendChild(closeButton);
  modal.appendChild(title);
  modal.appendChild(closeButtonDiv);
  modal.appendChild(form);
  overlay.appendChild(modal);
  modalWrap.appendChild(overlay);
  document.body.insertBefore(modalWrap, header);

  // Store the modal elements
  const modalElements = { modalWrap, overlay, closeButton };

  return modalElements;
};

// Existing code
const handleModalClicks = () => {
  const { modalWrap, overlay, closeButton } = createModal();

  callbackButton.addEventListener('click', () => modalWrap.classList.add('modal-wrap__visible'));
  closeButton.addEventListener('click', () => modalWrap.classList.remove('modal-wrap__visible'));
  document.addEventListener('click', e => {
    if (!callbackButton.contains(e.target) && !overlay.contains(e.target)) {
      modalWrap.classList.remove('modal-wrap__visible');
    }
  });
};

export {
  createModal,
  handleModalClicks,
};

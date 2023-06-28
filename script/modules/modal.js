const modalWrap = document.querySelector('.modal-wrap');
const headerCallback = document.querySelector('.header__callback');
const modalClose = document.querySelector('.modal__close');
const callbackForm = document.querySelector('.callback-form');
const overlay = document.querySelector('.overlay');
const modalForm = document.querySelector('.modal__form');

const handleModalClicks = () => {
  headerCallback.addEventListener('click', () => modalWrap.classList.add('modal-wrap__visible'));
  modalClose.addEventListener('click', () => modalWrap.classList.remove('modal-wrap__visible'));
  document.addEventListener('click', e => {
    if (!headerCallback.contains(e.target) && !overlay.contains(e.target)) {
      modalWrap.classList.remove('modal-wrap__visible');
    }
  });
  callbackForm.addEventListener('submit', e => {
    e.preventDefault();
    modalWrap.classList.remove('modal-wrap__visible');
    modalForm.reset();
  });
};

export {
  handleModalClicks,
};

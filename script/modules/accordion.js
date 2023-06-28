const buttons = document.querySelectorAll('.faq-list__button');
const faqListWrappers = document.querySelectorAll('.faq-list__wrapper');
const faqListPaths = document.querySelectorAll('.faq-list__path:first-child');

const accordionControl = () => {
  buttons.forEach(button => button.addEventListener('click', e => {
    const wrapper = e.currentTarget.nextElementSibling;
    const path = e.currentTarget.querySelector('.faq-list__path:first-child');
    if (wrapper.style.maxHeight) {
      wrapper.style.maxHeight = null;
      path.style.transform = 'rotate(0deg)';
    } else {
      closeAllFaq();
      wrapper.style.maxHeight = wrapper.scrollHeight + "px";
      path.style.transform = 'rotate(-90deg)';
    }
  }));
};

const closeAllFaq = () => {
  faqListWrappers.forEach((wrapper) => {
    wrapper.style.maxHeight = null;
  });
  faqListPaths.forEach((path) => {
    path.style.transform = 'rotate(0deg)';
  });
};

export {
  accordionControl,
  closeAllFaq,
};

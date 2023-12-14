import {createHeader} from './modules/header.js';
import {createBackButton} from './modules/backButton.js';
import {createFooter} from './modules/footer.js';
import {handleButtonClicks, handleBurgerClicks, handleAnchorClicks} from './modules/elementsControl.js';
import {accordionControl, closeAllFaq} from './modules/accordion.js';
import {createModal, handleModalClicks} from './modules/modal.js';
import {createTopBtn} from './modules/scrollTopBtn.js'

const init = () => {
  handleButtonClicks();
  handleBurgerClicks();
  handleAnchorClicks();
  accordionControl();
  closeAllFaq();
  handleModalClicks();
  createFooter();
  createTopBtn();
}

window.goInit = init;

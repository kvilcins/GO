import {handleButtonClicks, handleBurgerClicks, handleAnchorClicks} from './modules/elementsControl.js';
import {accordionControl, closeAllFaq} from './modules/accordion.js';
import {handleModalClicks} from './modules/modal.js';

const init = () => {
  handleButtonClicks();
  handleBurgerClicks();
  handleAnchorClicks();
  accordionControl();
  closeAllFaq();
  handleModalClicks();
}

window.goInit = init;

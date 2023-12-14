import {sectionHalls} from './modules/halls.js';
import {createDescription, mainElement} from "./modules/description.js";

const createRoomsMain = () => {
  createDescription();

  mainElement.appendChild(sectionHalls);
}

createRoomsMain();


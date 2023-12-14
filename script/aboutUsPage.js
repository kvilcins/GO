import {sectionAboutUs} from './modules/aboutUs.js';
import {createDescription, mainElement} from "./modules/description.js";

const createAboutUs = () => {
  createDescription();

  mainElement.appendChild(sectionAboutUs);
}

createAboutUs();


import {sectionFeedbacks} from './modules/feedbacks.js';
import {createDescription, mainElement} from "./modules/description.js";

const createFeedbackPage = () => {
  createDescription();

  mainElement.appendChild(sectionFeedbacks);
}

createFeedbackPage();

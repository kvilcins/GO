import {sectionBooking} from './modules/booking.js';
import {createDescription, mainElement} from "./modules/description.js";

const createBooking = () => {
  createDescription();

  mainElement.appendChild(sectionBooking);
}

createBooking();


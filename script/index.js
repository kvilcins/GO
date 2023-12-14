import {sectionBanner} from './modules/mainBanner.js';
import {sectionEntertainment} from './modules/entertainment.js';
import {sectionHalls} from './modules/halls.js';
import {sectionBooking} from './modules/booking.js';
import {sectionAboutUs} from './modules/aboutUs.js';
import {sectionFeedbacks} from './modules/feedbacks.js';
import {sectionFaq} from './modules/faq.js';

let mainElement = document.createElement('main');
document.body.appendChild(mainElement);
mainElement.appendChild(sectionBanner);
mainElement.appendChild(sectionEntertainment);
mainElement.appendChild(sectionHalls);
mainElement.appendChild(sectionBooking);
mainElement.appendChild(sectionAboutUs);
mainElement.appendChild(sectionFeedbacks);
mainElement.appendChild(sectionFaq);

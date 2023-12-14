const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const baseURL = isDevelopment ? '/rooms.js' : '/GO';

export {
  baseURL,
}

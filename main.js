import {loadItemListeners} from './pages/adminPage/adminPage.js';
import adminPageIndex from './pages/adminPage/adminPageIndex.js';
import adminLoginPage from './pages/adminLoginPage.js';
import { displayMenu } from './app.js';

async function handlePageChange() {
  switch (location.hash) {
    case "#login":
      $('main').html(await adminLoginPage());
      break;
    case "#admin":
      $('main').html(await adminPageIndex());
      loadItemListeners();
      break;
    default:
    case '#menu':
      $('main').html(await displayMenu());
      break;
  }
}

window.addEventListener("hashchange", handlePageChange);
window.addEventListener("load", handlePageChange);

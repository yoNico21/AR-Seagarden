import 'destyle.css';
import '/src/scss/app.scss';
import { hero } from './hero';
import { info } from './info';
import { footer } from './footer';
import { ar } from './ar';

const app = document.querySelector('#app');

let showCanvas = false;

if (app.innerHTML === '') display();

function display() {
  if (showCanvas) {
    ar(app);

    const share = document.querySelector('.btn-share');
    const socials = document.querySelector('.socials-container');

    share.addEventListener('click', () => {
      socials.classList.toggle('show');
      console.log('click');
    });

    const logo = document.querySelector('.logo-min');
    logo.addEventListener('click', () => {
      showCanvas = false;
      app.innerHTML = '';
      display();
    });
  } else {
    hero(app);
    info(app);
    footer(app);

    const start = document.querySelector('.btn-start');

    if (start) {
      start.addEventListener('click', () => {
        showCanvas = true;
        app.innerHTML = '';
        display();
      });
    }
  }
}

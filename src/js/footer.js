import { create, add } from './tools';
import '/src/scss/footer.scss';

export function footer(el) {
  let section = create('section', 'footer');

  let a = create('a');
  a.href = 'https://seagarden.app';
  a.innerText = 'seagarden.app';

  let creator = create('a');
  creator.href = 'https://nielsnicola.xyz';
  creator.setAttribute('target', '_blank');
  creator.innerText = 'nielsnicola.xyz';

  let p = create('p', 'copyright');
  p.innerHTML = `© ${year} 
  <a href=${a.href} target=${a.target}>${a.innerText}</a>
  by 
  <a href=${creator.href} target=${creator.target}>${creator.innerText}</a>`;

  add(section, el);
  add(p, section);
}

const year = new Date().getFullYear();

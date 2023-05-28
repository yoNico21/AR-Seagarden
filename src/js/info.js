import { create, add } from './tools';
import '/src/scss/info.scss';

export function info(el) {
  let section = create('section', 'info');

  let p = create('p', 'project-description');
  p.innerText = content;

  let button = create('button', 'btn');
  button.classList.add('btn-github');

  let a = create('a', 'repo-hyperlink');
  a.href = 'https://github.com/yoNico21/AR-Seagarden';
  a.setAttribute('target', '_blank');

  let i = create('i', 'fa-brands');
  i.classList.add('fa-github');

  let span = create('span');
  span.innerText = 'yoNico21/AR-Seagarden';

  add(section, el);
  add(p, section);
  add(button, section);
  add(a, button);
  add(i, a);
  add(span, a);
}

const content =
  'seagarden.app is a web-based augmented reality application created by Niels Nicola as a result of an art school assignment. It acts as a second layer on top of Park Zypendaal and Sonsbeek located in Arnhem. Displaying imagery of a sea garden for people to explore while going for a walk in the park. If you want to take a look under the hood you can access the repository on GitHub.';

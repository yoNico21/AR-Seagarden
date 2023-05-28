import { create, add } from './tools';
import '/src/scss/share.scss';

export function share() {
  let container = create('div', 'share-container');

  let button = create('button', 'btn-share');

  let share = create('i', 'fa-solid');
  share.classList.add('fa-share-from-square');

  let ul = create('ul', 'socials-container');

  const socials = [
    { name: 'whatsapp', color: '#25d366', shape: 'round' },
    {
      name: 'instagram',
      color:
        'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)',
      shape: 'square',
    },
    { name: 'snapchat', color: '#fffc00', shape: 'round' },
    { name: 'facebook', icon: 'facebook-f', color: '#4267b2', shape: 'square' },
  ];

  socials.forEach((social) => {
    let li = create('li', 'social');
    li.classList.add(social.name);
    li.style.background = social.color;

    let i = create('i', `fa-brands`);
    if (social.icon) {
      i.classList.add(`fa-${social.icon}`);
    } else {
      i.classList.add(`fa-${social.name}`);
    }
    if (social.shape === 'round') {
      li.style.borderRadius = '50%';
      li.style.width = '2.5rem';
      li.style.height = '2.5rem';
    }

    add(li, ul);
    add(i, li);
  });

  add(button, container);
  add(share, button);
  add(ul, container);

  return container;
}

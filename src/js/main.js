import { addCreature } from "./three/creature-1";
import { create, add } from "./tools";
import "/src/scss/main.scss";

export function main(element) {
  let section = create("section", "main");

  let nav = create("div", "main-nav");
  add(nav, section);

  let mainContent = create("div", "main-content");
  add(mainContent, section);

  const content = [
    { label: "About", function: about() },
    { label: "Creatures", function: creatures() },
  ];

  content.forEach((item, i) => {
    let div = create("div", "nav-item");
    div.innerText = item.label;

    add(div, nav);

    div.addEventListener("click", () => {
      mainContent.innerHTML = "";
      add(content[i].function, mainContent);
      for (let child of nav.children) {
        if (child.classList.contains("active")) {
          child.classList.remove("active");
        }
      }
      div.classList.add("active");
    });
  });

  nav.children[0].classList.add("active");

  add(content[0].function, mainContent);
  add(section, element);
}

function about() {
  let section = create("section", "about");
  section.classList.add("main-item");

  const content =
    "seagarden.app is a web-based augmented reality application. It acts as a second layer on top of park Sonsbeek and park Zypendaal located in Arnhem. Displaying imagery of a sea garden full of creatures to explore while going for a walk in the park. The start of this project is a reflection of the <i>Molukse Zeetuin</i> (which translates to Moluccan sea garden) which took place in Arnhem in 1928. The Moluccan sea garden can be interpreted as an early attempt at an augmented reality experience. This ultimately gave me the idea to create a modern-day sea garden for park Sonsbeek and park Zypendaal, in the form of a web application.";

  let p = create("p", "project-description");
  p.innerHTML = content;
  add(p, section);

  let img = create("img", "molukse-zeetuin");
  img.src = "/zeetuin.jpg";
  img.setAttribute(
    "alt",
    "A picture of a artificially created sea garden, dating back to 1928"
  );
  add(img, section);

  let caption = create("p", "image-caption");
  caption.innerHTML = `
  <i>Molukse Zeetuin, Zijpendaalseweg Arnhem, 1928 – Photo: <a href="https://www.geldersarchief.nl/bronnen/foto-s-en-films?mivast=37&miadt=37&mizig=284&miview=gal&mizk_alle=molukse%20zeetuin" target="_blank">Gelders Archief</a></i>
  `;
  add(caption, section);

  const githubParagraph =
    "This web application is an art project and the result of a study assignment. People who are further interested in the development of this website can find everything in a publicly available GitHub repository. You can visit it by clicking the following button:";

  let pGH = create("p", "github-description");
  pGH.innerHTML = githubParagraph;
  add(pGH, section);

  let button = create("button", "btn");
  button.classList.add("btn-github");
  add(button, section);

  let a = create("a", "repo-hyperlink");
  a.href = "https://github.com/yoNico21/AR-Seagarden";
  a.setAttribute("target", "_blank");
  add(a, button);

  let i = create("i", "fa-brands");
  i.classList.add("fa-github");
  add(i, a);

  let span = create("span");
  span.innerText = "yoNico21/AR-Seagarden";
  add(span, a);

  return section;
}

function creatures() {
  let section = create("section", "creatures");
  section.classList.add("main-item");

  const THREECreatures = [1];

  THREECreatures.forEach((creature) => {
    let div = create("div", "creature-container");
    div.classList.add(`container-${creature}`);

    let canvas = create("canvas", `#creature-${creature}`);

    add(div, section);
    add(canvas, div);

    addCreature(`creature-${creature}`);
  });

  return section;
}

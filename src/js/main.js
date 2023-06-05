import { create, add } from "./tools";
import "/src/scss/main.scss";

export function main(element) {
  let section = create("section", "main");

  let nav = create("div", "main-nav");
  add(nav, section);

  let mainContent = create("div", "main-content");
  add(mainContent, section);

  const content = [
    { label: "Intro", function: intro() },
    { label: "Creatures", function: creatures() },
    { label: "More", function: more() },
  ];

  content.forEach((item, i) => {
    let div = create("div", "nav-item");
    div.innerText = item.label;

    add(div, nav);

    div.addEventListener("click", () => {
      mainContent.innerHTML = "";
      add(content[i].function, mainContent);
    });
  });

  add(content[0].function, mainContent);
  add(section, element);
}

function intro() {
  let section = create("section", "intro");
  section.classList.add("main-item");

  return section;
}

function creatures() {
  let section = create("section", "creatures");
  section.classList.add("main-item");

  return section;
}

function more() {
  let section = create("section", "more");
  section.classList.add("main-item");

  let p = create("p", "project-description");
  p.innerText = content;

  let button = create("button", "btn");
  button.classList.add("btn-github");

  let a = create("a", "repo-hyperlink");
  a.href = "https://github.com/yoNico21/AR-Seagarden";
  a.setAttribute("target", "_blank");

  let i = create("i", "fa-brands");
  i.classList.add("fa-github");

  let span = create("span");
  span.innerText = "yoNico21/AR-Seagarden";

  add(p, section);
  add(button, section);
  add(a, button);
  add(i, a);
  add(span, a);

  return section;
}

const content =
  "seagarden.app is a web-based augmented reality application created by Niels Nicola as a result of an art school assignment. It acts as a second layer on top of Park Zypendaal and Sonsbeek located in Arnhem. Displaying imagery of a sea garden for people to explore while going for a walk in the park. If you want to take a look under the hood you can access the repository on GitHub.";

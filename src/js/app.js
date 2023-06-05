import "destyle.css";
import "/src/scss/app.scss";
import { hero } from "./hero";
import { main } from "./main";
import { footer } from "./footer";
import { ar } from "./ar";
import { startAR } from "./ar/ar-module";
import { inject } from "@vercel/analytics";
inject();

const app = document.querySelector("#app");

let showCanvas = false;
let refresh = false;

if (app.innerHTML === "") display();

function display() {
  if (showCanvas) {
    ar(app);

    const share = document.querySelector(".btn-share");
    const socials = document.querySelector(".socials-container");

    share.addEventListener("click", () => {
      socials.classList.toggle("show");
      console.log("click");
    });

    const logo = document.querySelector(".logo-min");
    logo.addEventListener("click", () => {
      refresh = true;
      showCanvas = false;
      app.innerHTML = "";
      display();
    });
  } else {
    hero(app);
    //info(app);
    main(app);
    footer(app);

    const start = document.querySelector(".btn-start");

    if (start) {
      start.addEventListener("click", () => {
        refresh = false;
        showCanvas = true;
        app.innerHTML = "";
        display();
        startAR();
      });
    }
  }

  if (refresh === true && showCanvas === false) {
    location.reload();
    refresh = false;
  }
}

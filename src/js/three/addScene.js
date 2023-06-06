import { createScene } from "./createScene";

let i = 0;

export function addScene() {
  const main = document.querySelector("section.main");
  const canvases = main.querySelectorAll("canvas");

  if (canvases) {
    canvases.forEach((canvas) => {
      createScene(canvas);
    });
  }
}

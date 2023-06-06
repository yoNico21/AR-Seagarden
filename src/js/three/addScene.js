import { createScene } from "./createScene";

export function addScene() {
  const main = document.querySelector("section.main");
  const canvases = main.querySelectorAll("canvas");

  if (canvases) {
    createScene(canvases);
  }
}

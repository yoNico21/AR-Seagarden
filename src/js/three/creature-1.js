import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

let canvas, scene, camera, renderer, controls;

export function addCreature(id) {
  function init(id) {
    canvas = document.getElementById(`#${id}`);
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);

    camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(0, 25, 25);

    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(canvas.innerWidth, canvas.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer);

    scene.add(new THREE.AxesHelper(500));

    new THREE.GLTFLoader().load(`/asset/${id}.glb`, (glb) => {
      scene.add(glb.scene);
      animate();
    });

    animate();
  }

  function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
}

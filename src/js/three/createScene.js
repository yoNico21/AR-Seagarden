import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function createScene(canvases) {
  canvases.forEach((element) => {
    let canvas, scene, camera, hemiLight, renderer, object;
    canvas = element;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);

    camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.set(0, 0, 5);

    hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    object = element.id.replace("-", "_");

    const loader = new GLTFLoader();
    loader.load(`/assets/${object}.glb`, (glb) => {
      glb.scene.rotation.x = THREE.MathUtils.degToRad(10);
      scene.add(glb.scene);
      animate();
    });

    animate();

    function animate() {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
  });
}

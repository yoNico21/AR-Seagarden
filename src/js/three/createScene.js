import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function createScene(canvas) {
  init(canvas);

  function init(element) {
    let canvas, scene, camera, hemiLight, renderer, object;
    canvas = element;
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x808080);

    camera = new THREE.PerspectiveCamera(
      90,
      canvas.offsetWidth / canvas.offsetWidth,
      1,
      2000
    );
    camera.position.set(0, 0, 5);

    hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 3);
    scene.add(hemiLight);

    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    object = element.id.replace("-", "_");

    let mixer;
    const loader = new GLTFLoader();
    loader.load(`/assets/${object}.glb`, (glb) => {
      const scale = object.scale;
      glb.scene.scale.setScalar(0.8);
      scene.add(glb.scene);

      mixer = new THREE.AnimationMixer(glb.scene);
      const clips = glb.animations;
      const clip = THREE.AnimationClip.findByName(clips, "RotateHover");
      const action = mixer.clipAction(clip);
      action.timeScale = 0.2;
      action.play();
    });

    const clock = new THREE.Clock();
    function animate() {
      if (mixer) {
        mixer.update(clock.getDelta());
      }
      renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);
  }
}

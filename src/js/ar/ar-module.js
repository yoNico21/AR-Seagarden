import * as THREE from "three";
import * as THREEx from "@ar-js-org/ar.js/three.js/build/ar-threex-location-only";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export function startAR() {
  const canvas = document.getElementById("canvas");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(90, 1.33, 0.1, 10000);
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });

  const arjs = new THREEx.LocationBased(scene, camera);
  const cam = new THREEx.WebcamRenderer(renderer);

  // Create the device orientation tracker
  const deviceOrientationControls = new THREEx.DeviceOrientationControls(
    camera
  );

  // Adding in hemisphere light to mimic natural sunlight
  const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
  scene.add(hemiLight);

  // Load in objects
  const objects = [
    // { fileName: "creature_1", lat: 5.9108008, lon: 51.9829402, scale: 1.0 }, // at home
    { fileName: "creature_1", scale: 2.0 },
    { fileName: "creature_2", scale: 2.0 },
    { fileName: "creature_3", scale: 2.0 },
    { fileName: "creature_4", scale: 2.0 },
  ];

  let coordinates = [
    { lat: 5.9109252, lon: 51.9828927 },
    { lat: 5.9108651, lon: 51.9829544 },
    { lat: 5.9108725, lon: 51.9829071 },
    { lat: 5.910906, lon: 51.982916 },
  ];
  shuffle(coordinates);

  let elevation = [
    { level: -6 },
    { level: -5 },
    { level: -4 },
    { level: -3 },
    { level: -2 },
    { level: -1 },
    { level: 0 },
    { level: 1 },
    { level: 2 },
    { level: 3 },
    { level: 4 },
    { level: 5 },
    { level: 6 },
  ];
  shuffle(elevation);

  let lastIndex;

  const loader = new GLTFLoader();
  objects.forEach((object, i) => {
    loader.load(`/assets/${object.fileName}.glb`, function (glb) {
      const scale = object.scale;
      glb.scene.scale.setScalar(scale);

      let idx;
      let randomIndex = Math.random() * elevation.length;

      if (lastIndex !== randomIndex) {
        idx = Math.floor(randomIndex);
      }
      console.log("before: " + randomIndex + "after: " + idx);

      arjs.add(
        glb.scene,
        coordinates[i].lat,
        coordinates[i].lon,
        elevation[idx].level
      );

      console.log(elevation[idx].level);

      lastIndex = i;
    });
  });

  // Start the GPS
  arjs.startGps();

  requestAnimationFrame(render);

  function render() {
    if (
      canvas.width != canvas.clientWidth ||
      canvas.height != canvas.clientHeight
    ) {
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      const aspect = canvas.clientWidth / canvas.clientHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
    }

    // Update the scene using the latest sensor readings
    deviceOrientationControls.update();

    cam.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
}

// Fisher-Yates (Knuth) Shuffle, found on: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

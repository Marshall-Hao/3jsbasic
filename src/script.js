import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import gsap from "gsap";

// *Sizes
const sizes = {
  width: 800,
  height: 600,
};
//*cursor
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5; // ! range -0.5 ~ 0.5
  cursor.y = -(e.clientY / sizes.height - 0.5); // ! range -0.5 ~ 0.5
});

// Scene
const scene = new THREE.Scene();
const canvas = document.querySelector("canvas.webgl");
// Objects
// const group = new THREE.Group();
// group.position.y = 1;
// group.scale.y = 2;
// group.rotation.y = 1;
// scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(cube1);

// const cube2 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );
// cube2.position.x = -2;
// group.add(cube2);

// const cube3 = new THREE.Mesh(
//   new THREE.BoxGeometry(1, 1, 1),
//   new THREE.MeshBasicMaterial({ color: 0x0000ff })
// );
// cube3.position.x = 2;
// group.add(cube3);
// *Axes helper
const axisHelper = new THREE.AxesHelper(2);
scene.add(axisHelper);

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.01,
  100
);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   100
// );
camera.position.set(0, 0, 3);
scene.add(camera);

//*controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.target.y = 2;
// controls.update();
// console.log(mesh.position.distanceTo(camera.position)); // *distance between 2
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);

//Time
// let time = Date.now();

// *Clock
const clock = new THREE.Clock();

// gsap.to(cube1.rotation, { duration: 1, delay: 1, y: 2 });
// gsap.to(cube1.rotation, { duration: 1, delay: 2, y: 0 });

// *Animation
const tick = () => {
  // Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // *Clock
  const elapseTime = clock.getElapsedTime();

  // * Update camera
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(cube1.position);
  // camera.lookAt(new THREE.Vector3()); //another way
  //*update objects
  // cube1.rotation.y = elapseTime;

  //*update control
  controls.update();
  // *Renderer
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

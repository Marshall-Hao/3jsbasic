import "./style.css";

import * as THREE from "three";
import gsap from "gsap";
// Scene
const scene = new THREE.Scene();

// Objects
// const group = new THREE.Group();
// group.position.y = 1;
// group.scale.y = 2;
// group.rotation.y = 1;
// scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
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
// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 3);
scene.add(camera);

// console.log(mesh.position.distanceTo(camera.position)); // *distance between 2
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(sizes.width, sizes.height);

//Time
// let time = Date.now();

// // *Clock
// const clock = new THREE.Clock();

gsap.to(cube1.position, { duration: 1, delay: 1, x: 2 });
gsap.to(cube1.position, { duration: 1, delay: 2, x: 0 });

// *Animation
const tick = () => {
  // Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // // *Clock
  // const elapseTime = clock.getElapsedTime();
  // //*update objects
  // cube1.rotation.y = elapseTime;
  // *Renderer
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

import "../css/style.css";

//Project setup
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

//Load scene background
const spaceTexture = new THREE.TextureLoader().load("/assets/images/little-street.jpg");
scene.background = spaceTexture;

//Drawing on Canvas
//Ring
const RinggGeometry = new THREE.TorusGeometry(4, 0.4, 16, 100);
const RingMaterial = new THREE.MeshStandardMaterial({ color: 0xf26b6b });
const Ring = new THREE.Mesh(RinggGeometry, RingMaterial);
Ring.position.set(0, -10, 0);
Ring.rotation.x += 0;
scene.add(Ring);

//Diamond
const DiamondGeometry = new THREE.OctahedronGeometry();
const DiamondMaterial = new THREE.MeshStandardMaterial({ color: 0xf26b6b });
const Diamond = new THREE.Mesh(DiamondGeometry, DiamondMaterial);
Diamond.position.set(0, -4.6, 0);
Diamond.rotation.x += 0;
scene.add(Diamond);

// Materials

const material = new THREE.MeshBasicMaterial();
material.color = new THREE.Color(0xff0000);

//Particles
const particlesGeometry = new THREE.BufferGeometry();
const particleCnt = 100;

const posArray = new Float32Array(particleCnt * 3); //*3 = xyz, xyz......

for (let i = 0; i < particleCnt * 3; i++) {
  posArray[i] = Math.random();
}

particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

const particlesMesh = new THREE.Points(particlesGeometry, material);
scene.add(particlesMesh);

//Adding lighting
const pointLight = new THREE.PointLight(0xe5841a);
pointLight.position.set(5, 6, 5);

const ambientLight = new THREE.AmbientLight(0xf4bc7d);
scene.add(pointLight, ambientLight);

//Light helper and Grid helper to
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

//Add Orbit Controls on Screen
const controls = new OrbitControls(camera, renderer.domElement);

// //Add 200 random stars in the scene
// function addStars() {
//   const geometry = new THREE.SphereGeometry(0.25, 24, 24);

//   const material = new THREE.MeshStandardMaterial({ color: 0xf26b6b });
//   const star = new THREE.Mesh(geometry, material);
//   const [x, y, z] = Array(3)
//     .fill()
//     .map(() => THREE.MathUtils.randFloatSpread(50));
//   star.position.set(x, y, z);
//   scene.add(star);
// }

// Array(200).fill().forEach(addStars);

/*
//Load scene background
const spaceTexture = new THREE.TextureLoader().load("/assets/images/little-street.jpg");
scene.background = spaceTexture;

//Create and load moon with texture and normal map
const moonTexture = new THREE.TextureLoader().load("/assets/images/moon-texture.jpeg");
const normalTexture = new THREE.TextureLoader().load("/assets/images/moon-normal.jpeg");

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera;


//Funciton to render the scene & camera
(function animate() {
  requestAnimationFrame(animate);

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  // Diamond.rotation.y += 0.1;
  controls.update();

  renderer.render(scene, camera);
})();

animate();
*/
function animate() {
  requestAnimationFrame(animate);

  // controls.update();
  // Diamond.rotation.y += 0.05;

  renderer.render(scene, camera);
}

animate();

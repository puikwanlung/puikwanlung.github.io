//Project setup
import * as THREE from "three";

import { OrbitControls } from "OrbitControls";

// Canvas
const canvas = document.querySelector("canvas.webgl");

//Scene
const scene = new THREE.Scene();

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
//Base Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 3;
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//Load scene background
const spaceTexture = new THREE.TextureLoader().load("/threeproejct/images/little-street.jpg");
scene.background = spaceTexture;

//Adding lighting
const spotLight = new THREE.SpotLight({ color: 0xffffff, intensity: 1 });
spotLight.position.set(0, 2, 2);
spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(spotLight, ambientLight);

// //Light helper and Grid helper to
const lightHelper = new THREE.PointLightHelper(spotLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

//Add Orbit Controls on Screen
const controls = new OrbitControls(camera, renderer.domElement);

//Stars particle Loader
const loader = new THREE.TextureLoader();
const cross = loader.load("/threeproejct/images/cross.png");

//Drawing on Canvas
//Ring
const RingGeometry = new THREE.TorusGeometry(0.5, 0.04, 16, 100);
const RingMaterial = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  roughness: 0.4,
  metalness: 0.8,
  flatShading: false,
});
const RingBody = new THREE.Mesh(RingGeometry, RingMaterial);

//Diamond
const DiamondGeometry = new THREE.OctahedronGeometry(0.3, 2);
const DiamondMaterial = new THREE.MeshStandardMaterial({
  color: 0xd81212,
  roughness: 0.3,
  metalness: 0.5,
  flatShading: true,
});
// const DiamondMaterial = new THREE.MeshStandardMaterial({ color: 0xf26b6b });
const Diamond = new THREE.Mesh(DiamondGeometry, DiamondMaterial);
Diamond.position.set(0, 0.8, 0);

//Create a group and add the Ring and Diamond
//These Ring and Diamond can now be rotated / scaled etc as a group
const Ring = new THREE.Group();
Ring.add(RingBody);
Ring.add(Diamond);
Ring.position.set(0, -1, 0);

scene.add(Ring);

// Particles Material
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  map: cross,
  transparent: true,

  //Can customize colour and blending mode
  // color: "blue",
  // blending: THREE.AdditiveBlending,
});

//Particles
const particlesGeometry = new THREE.BufferGeometry();

const particleCnt = 2200;
const posArray = new Float32Array(particleCnt * 10); //*3 = xyz, xyz......

for (let i = 0; i < particleCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * (Math.random() * 6);
}

particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

//Mouse
document.addEventListener("mousemove", animateParticles);

let mouseX = 0;
let mouseY = 0;

function animateParticles(event) {
  mouseY = event.clientY;
  mouseX = event.clientX;
}

const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  Ring.rotation.y = 0.5 * elapsedTime;
  particlesMesh.rotation.y = -0.1 * elapsedTime;

  if (mouseX > 0) {
    particlesMesh.rotation.x = -mouseY * (elapsedTime * 0.00008);
    particlesMesh.rotation.y = -mouseX * (elapsedTime * 0.00008);
  }

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

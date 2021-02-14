/*import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/examples/jsm/controls/OrbitControls.js';
import {FBXLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/examples/jsm/loaders/FBXLoader.js';

var container, controls;
var camera, scene, renderer, light;
var clock = new THREE.Clock();
var xMixer, yMixer;

init();
animate();

function init() {
    container = document.createElement('div');
    document.body.appendChild(container);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.set(100, 200, 300);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 200, 0);
    scene.add(light);

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(0, 200, 100);
    light.castShadow = true;
    light.shadow.camera.top = 180;
    light.shadow.camera.bottom = -100;
    light.shadow.camera.left = -120;
    light.shadow.camera.right = 120;
    scene.add(light);

    // ground
    var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
        color: 0x999999,
        depthWrite: false
    }));
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    var grid = new THREE.GridHelper(2000, 20, "#000000", 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);

    // models
    var xLoader = new FBXLoader();
//xLoader.load('https://res.cloudinary.com/natesc-loud/raw/upload/v1588540853/Defeated_kr8h5d.fbx', function(xBot) {

  xLoader.load('https://res.cloudinary.com/vektor/raw/upload/v1613271274/Zombie_Death_gq82q2_mrmgm2.fbx', function(xBot) {

        xMixer = new THREE.AnimationMixer(xBot);
        var xAction = xMixer.clipAction(xBot.animations[0]);
        xAction.play();
        xBot.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        xBot.position.set(25,0,-100); // x,y,z
        xBot.rotation.set(0,-0.2,0); // x,y,z
        scene.add(xBot);
    });
  
    /* Second Model loading
    var yLoader = new FBXLoader();
//yLoader.load('https://res.cloudinary.com/natesc-loud/raw/upload/v1588540857/Zombie_Death.fbx', function(yBot) {

yLoader.load('https://res.cloudinary.com/vektor/raw/upload/v1613271274/Zombie_Death_gq82q2_mrmgm2.fbx', function(yBot) {
  
        yMixer = new THREE.AnimationMixer(yBot);
        var yAction = yMixer.clipAction(yBot.animations[0]);
        yAction.play();
        yBot.traverse(function(child) {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        yBot.position.set(-75,0,-75);
        yBot.rotation.set(0,2,0);
        scene.add(yBot);
    });

  
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize, false);
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    var delta = clock.getDelta();
    if (xMixer) xMixer.update(delta);
    if (yMixer) yMixer.update(delta);
    renderer.render(scene, camera);
}


*/

import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';

// just waiting for your beautiful creations!


// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color('red');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);*/
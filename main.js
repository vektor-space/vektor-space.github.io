import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/examples/jsm/controls/OrbitControls.js';
import {FBXLoader} from 'https://threejsfundamentals.org/threejs/resources/threejs/r114/examples/jsm/loaders/FBXLoader.js';

var container, controls;
var camera, scene, renderer, light;
var clock = new THREE.Clock();
var xMixer, yMixer;

init();
animate();

function init() {
    //container = document.createElement('div');
    container = document.querySelector('#scene-container');
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
  
/*    
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
*/

  
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




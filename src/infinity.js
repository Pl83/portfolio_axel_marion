import * as THREE from 'three';
import { Capsule } from 'three/addons/math/Capsule.js';
import { Octree } from 'three/addons/math/Octree.js';

let scene, renderer, stats;

const clock = new THREE.Clock();

const GRAVITY = 0	;

const STEPS_PER_FRAME = 5;
const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );
const worldOctree = new Octree();
let playerOnFloor = false;


const keyStates = {};

let mesh;
let mouseTime = 0;
const container = document.getElementById( 'container' );

const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.rotation.order = 'YXZ';

const playerVelocity = new THREE.Vector3();
const playerDirection = new THREE.Vector3();


const amount = 25;
const count = Math.pow( amount, 3 );
const matrix = new THREE.Matrix4();
const color = new THREE.Color().setHex(0x000000);
const scolor = new THREE.Color();
const geometry = new THREE.IcosahedronGeometry( 0.05, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff} );
mesh = new THREE.InstancedMesh( geometry, material, count );
const offset = ( amount - 1 ) / 2;
init();

document.addEventListener( 'keydown', ( event ) => {

    keyStates[ event.code ] = true;

    } );

    document.addEventListener( 'keyup', ( event ) => {

    keyStates[ event.code ] = false;

    } );

container.addEventListener( 'mousedown', () => {

        document.body.requestPointerLock();

        mouseTime = performance.now();

    } );

document.body.addEventListener( 'mousemove', ( event ) => {

    if ( document.pointerLockElement === document.body ) {

        camera.rotation.y -= event.movementX / 500;
        camera.rotation.x -= event.movementY / 500;

    }

} );
function playerCollisions() {

    const result = worldOctree.capsuleIntersect( playerCollider );

    playerOnFloor = false;

    if ( result ) {

        playerOnFloor = result.normal.y > 0;

        if ( ! playerOnFloor ) {

            playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) );

        }

        if ( result.depth >= 1e-10 ) {

            playerCollider.translate( result.normal.multiplyScalar( result.depth ) );

        }

    }

}

function updatePlayer( deltaTime ) {

    let damping = Math.exp( - 4 * deltaTime ) - 1;

    if ( ! playerOnFloor ) {

        playerVelocity.y -= GRAVITY * deltaTime;

        // small air resistance
        damping *= 0.1;

    }

    playerVelocity.addScaledVector( playerVelocity, damping );

    const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime );
    playerCollider.translate( deltaPosition );

    playerCollisions();

    camera.position.copy( playerCollider.end );

}

    function getForwardVector() {

    camera.getWorldDirection( playerDirection );
    playerDirection.normalize();

    return playerDirection;

}
function getSideVector() {

    camera.getWorldDirection( playerDirection );
    playerDirection.normalize();
    playerDirection.cross( camera.up );

    return playerDirection;

}
function getUpVector() {
    const up = new THREE.Vector3(0, 1, 0); // Vecteur vers le haut dans le repère local
    return up.applyQuaternion(camera.quaternion).normalize(); // Transformé selon la rotation de la caméra
}

function controls(deltaTime) {
    // gives a bit of air control
    const speedDelta = deltaTime * (playerOnFloor ? 25 : 8);

    if (keyStates['KeyW']) {
        playerVelocity.add(getForwardVector().multiplyScalar(speedDelta));
    }

    if (keyStates['KeyS']) {
        playerVelocity.add(getForwardVector().multiplyScalar(-speedDelta));
    }

    if (keyStates['KeyA']) {
        playerVelocity.add(getSideVector().multiplyScalar(-speedDelta));
    }

    if (keyStates['KeyD']) {
        playerVelocity.add(getSideVector().multiplyScalar(speedDelta));
    }

    if (keyStates['Space']) {
        playerVelocity.add(getUpVector().multiplyScalar(speedDelta)); // Monter
    }

    if (keyStates['ShiftLeft']) {
        playerVelocity.add(getUpVector().multiplyScalar(-speedDelta)); // Descendre
    }
}




function init() {

    scene = new THREE.Scene();
    const light = new THREE.HemisphereLight( 0xffffff, 0x888888, 3 );
    light.position.set( 0, 1, 0 );
    scene.add( light );
    let i = 0;

        
    for ( let x = 0; x < amount; x ++ ) {

        for ( let y = 0; y < amount; y ++ ) {

            for ( let z = 0; z < amount; z ++ ) {
            
            matrix.setPosition( offset - x, offset - y, offset - z );
            mesh.setColorAt( i, scolor);
            mesh.instanceColor.needsUpdate = true;
            mesh.setMatrixAt( i, matrix );
            i ++;
            }

        }

    }
    scene.add( mesh );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animate );
    container.appendChild( renderer.domElement );
            
    window.addEventListener( 'resize', onWindowResize );
    
}



function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

const raycaster = new THREE.Raycaster();

function animate() {
    const numRays = 10; // Augmenter le nombre de rayons par cycle
    for (let i = 0; i < numRays; i++) {
        const origine = new THREE.Vector3(
            Math.random() * amount - offset,
            Math.random() * amount - offset,
            Math.random() * amount - offset
        );

        const mouse = new THREE.Vector3(
            Math.random() * 2 - 1,
            Math.random() * 2 - 1,
            Math.random() * 2 - 1
        ).normalize();

        raycaster.set(origine, mouse);

        const intersection = raycaster.intersectObject(mesh);

        if (intersection.length > 0) {
            const instanceId = intersection[0].instanceId;

            mesh.getColorAt(instanceId, color);

            if (color.equals(scolor)) {
                mesh.setColorAt(instanceId, color.setHex(0x000000));
                mesh.instanceColor.needsUpdate = true;
            }
        }
    }

    const deltaTime = Math.min(0.05, clock.getDelta()) / STEPS_PER_FRAME;

    for (let i = 0; i < STEPS_PER_FRAME; i++) {
        controls(deltaTime);
        updatePlayer(deltaTime);
    }

    renderer.render(scene, camera);
}
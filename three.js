const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020617);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 420,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth * 0.85, 420);
document.getElementById("three-scene").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshPhysicalMaterial({
    color: 0x38bdf8,
    metalness: 0.8,
    roughness: 0.15,
    clearcoat: 1
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const light1 = new THREE.PointLight(0xffffff, 1.5);
light1.position.set(5, 5, 5);
scene.add(light1);

const light2 = new THREE.PointLight(0x38bdf8, 1);
light2.position.set(-5, -5, 5);
scene.add(light2);

camera.position.z = 4;

let dragging = false;

renderer.domElement.addEventListener("mousedown", () => dragging = true);
renderer.domElement.addEventListener("mouseup", () => dragging = false);
renderer.domElement.addEventListener("mousemove", e => {
    if (dragging) {
        cube.rotation.y += e.movementX * 0.01;
        cube.rotation.x += e.movementY * 0.01;
    }
});

function animate() {
    requestAnimationFrame(animate);
    if (!dragging) cube.rotation.y += 0.006;
    renderer.render(scene, camera);
}
animate();

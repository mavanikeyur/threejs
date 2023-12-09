const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry(5, 5, 5);
// const geometry = new THREE.CapsuleGeometry(1, 1, 20, 8);
// const geometry = new THREE.CircleGeometry(3, 50);
// const geometry = new THREE.ConeGeometry(2,2, 30);
// const geometry = new THREE.CylinderGeometry(2,2,4, 30);

//This will react withaout ambientLight
const material = new THREE.MeshBasicMaterial({ color: "red" });
// const material = new THREE.LineBasicMaterial( {
// 	color: 0xffffff,
// 	linewidth: 5,	
// } );


// const cube = new THREE.Mesh(geometry, material);
const cube = new THREE.Line(geometry, material);

scene.add(cube);


// let flag = true;
// animate();

// function animate() {
//   if (cube.position.x > 5) flag = false;
//   else if (cube.position.x < -5) flag = true;

//   if (flag) cube.position.x += 0.1;
//   else cube.position.x -= 0.1;

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   cube.rotation.z += 0.01;

//   renderer.render(scene, camera);
//   requestAnimationFrame(animate);
// }

let q = 0;
animate();

function animate() {
  cube.position.x = 10 * Math.sin((q += 0.01));

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
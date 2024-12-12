import * as THREE from './three.module.js';
export default function piso ({x, y, z}) 
{

//PISO 1
var geometriapiso1 = new THREE.CylinderGeometry(30,30,2,50);
var texturapiso1 = new THREE.TextureLoader().load("./assets/piso1.jpg");
var materialpiso1 = new THREE.MeshLambertMaterial({ map: texturapiso1 });
var piso1 = new THREE.Mesh(geometriapiso1,materialpiso1);
//scene.add(piso1);
piso1.position.set(0,0,0);

//PISO 2
var geometriapiso2 = new THREE.CylinderGeometry(27,27,2,50);
var texturapiso2 = new THREE.TextureLoader().load("./assets/piso2.jpg");
var materialpiso2 = new THREE.MeshLambertMaterial({ map: texturapiso2 });
var piso2 = new THREE.Mesh(geometriapiso2,materialpiso2);
//scene.add(piso2);
piso2.position.set(0,2,0);

//PISO 3
var geometriapiso3 = new THREE.CylinderGeometry(24,24,2,50);
var texturapiso3 = new THREE.TextureLoader().load("./assets/piso1.jpg");
var materialpiso3 = new THREE.MeshLambertMaterial({ map: texturapiso3 });
var piso3 = new THREE.Mesh(geometriapiso3,materialpiso3);
//scene.add(piso3);
piso3.position.set(0,4,0);

//PISO 4
var geometriapiso4 = new THREE.CylinderGeometry(21,21,2,50);
var texturapiso4 = new THREE.TextureLoader().load("./assets/piso2.jpg");
var materialpiso4 = new THREE.MeshLambertMaterial({ map: texturapiso4 });
var piso4 = new THREE.Mesh(geometriapiso4,materialpiso4);
//scene.add(piso4);
piso4.position.set(0,6,0);

//PISO 5
var geometriapiso5 = new THREE.CylinderGeometry(18,18,2,50);
var texturapiso5 = new THREE.TextureLoader().load("./assets/piso1.jpg");
var materialpiso5 = new THREE.MeshLambertMaterial({ map: texturapiso5 });
var piso5 = new THREE.Mesh(geometriapiso5,materialpiso5);
//scene.add(piso5);
piso5.position.set(0,8,0);

//PISO 6
var geometriapiso6 = new THREE.CylinderGeometry(15, 15, 2, 50);
var texturapiso6 = new THREE.TextureLoader().load("./assets/piso2.jpg");
var materialpiso6 = new THREE.MeshLambertMaterial({ map: texturapiso6 });
var piso6 = new THREE.Mesh(geometriapiso6, materialpiso6);
//scene.add(piso6);
piso6.position.set(0, 10, 0);

var pisito = new THREE.Group();
pisito.add(piso1, piso2, piso3, piso4, piso5, piso6);
pisito.position.set(x, y, z);  
return pisito;
}

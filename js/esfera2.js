import * as THREE from './three.module.js';
export default function esfera2 ({x, y, z}) 
{

 // ESFERA
 var geometriaEsfera = new THREE.SphereGeometry(5);
 var texturaEsfera = new THREE.TextureLoader().load("./assets/esfera2.jpg");
 var materialEsfera = new THREE.MeshLambertMaterial({ map: texturaEsfera });
 var mallaEsfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
 //scene.add(mallaEsfera);
 mallaEsfera.position.set(0, 0, 0);

 // CILINDRO 1
 var geometriaCilindro1 = new THREE.CylinderGeometry(1.5, 1.5, 1.3, 50);
 var texturaCilindro = new THREE.TextureLoader().load("./assets/plata.jpg");
 var materialCilindro = new THREE.MeshLambertMaterial({ map: texturaCilindro });
 var mallaCilindro1 = new THREE.Mesh(geometriaCilindro1, materialCilindro);
 //scene.add(mallaCilindro1);
 mallaCilindro1.position.set(0, 4.9, 0);

 // CILINDRO 2
 var geometriaCilindro2 = new THREE.CylinderGeometry(1.8, 1.8, 0.5, 50);
 var mallaCilindro2 = new THREE.Mesh(geometriaCilindro2, materialCilindro);
 //scene.add(mallaCilindro2);
 mallaCilindro2.position.set(0, 4.7, 0);

 // TORUS
 var geometriaTorus = new THREE.TorusGeometry(1, 0.3, 10, 30);
 var mallaTorus = new THREE.Mesh(geometriaTorus, materialCilindro);
 //scene.add(mallaTorus);
 mallaTorus.position.set(0, 5.6, 0);

var esferita2 = new THREE.Group();
esferita2.add(mallaEsfera, mallaCilindro1, mallaCilindro2,  mallaTorus);
esferita2.position.set(x, y, z);  
return esferita2;
}

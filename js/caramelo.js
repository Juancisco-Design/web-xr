import * as THREE from './three.module.js';
export default function caramelo ({x, y, z}) 
{

 // CILINDRO 1
 var geometriaCilindro1 = new THREE.CylinderGeometry(3, 3, 0.5, 50);
 var texturaCilindro = new THREE.TextureLoader().load("./assets/caramelo.jpg");
 var materialCilindro = new THREE.MeshLambertMaterial({ map: texturaCilindro });
 var mallaCilindro1 = new THREE.Mesh(geometriaCilindro1, materialCilindro);
 //scene.add(mallaCilindro1);
 mallaCilindro1.position.set(0, 4.9, 0);
 mallaCilindro1.rotation.x = THREE.MathUtils.degToRad(90);

 // CILINDRO 2
 var geometriaCilindro2 = new THREE.CylinderGeometry(0.15, 0.25, 10, 50);
 var materialCilindro2 = new THREE.MeshLambertMaterial({ color: 0xffffff });
 var mallaCilindro2 = new THREE.Mesh(geometriaCilindro2, materialCilindro2);
 //cene.add(mallaCilindro2);
 mallaCilindro2.position.set(0, 0, 0);

var caramelito = new THREE.Group();
caramelito.add(mallaCilindro1, mallaCilindro2);
caramelito.position.set(x, y, z);  
return caramelito;
}

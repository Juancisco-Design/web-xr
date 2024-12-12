import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function regalo3 ({x, y, z}) 
{

    //REGALO

    //BASE
    var base = new RoundedBoxGeometry (5, 5, 5, 3, 0.50);
    var texture = new THREE.TextureLoader().load("./assets/3.jpg")
    var material = new THREE.MeshLambertMaterial({map:texture});
    var mesh = new THREE.Mesh(base,material);
    //scene.add(mesh);
    mesh.position.set(0,5,0);

    //LISTON
    var liston = new RoundedBoxGeometry(1.5, 5.1, 5.1, 3, 0.50);
    var texture1 = new THREE.TextureLoader().load("./assets/liston.jpg")
    var material1 = new THREE.MeshLambertMaterial({map:texture1});

    var mesh1 = new THREE.Mesh(liston,material1);
    //scene.add(mesh1);
    mesh1.position.set(0,5,0);

    var mesh2 = new THREE.Mesh(liston,material1);
    //scene.add(mesh2);
    mesh2.position.set(0,5,0);
    mesh2.rotateY(Math.PI / 2);

    //MOÑO
    var torusknot1 = new THREE.TorusKnotGeometry(1,0.3,100,100,2,5);
    var material1 = new THREE.MeshLambertMaterial({map:texture1});
    var mesh3 = new THREE.Mesh(torusknot1,material1);
    //scene.add(mesh3);
    mesh3.position.set(0,8,0);
    mesh3.rotateX(Math.PI / 2);

var regalito3 = new THREE.Group();
regalito3.add(mesh, mesh1, mesh2,  mesh3);
regalito3.position.set(x, y, z);  
return regalito3;
}

import * as THREE from './three.module.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
export default function muñeco ({x, y, z}) 
{
    // ESFERA ARRIBA
    var esferaArriba = new THREE.SphereGeometry(6);
    var texturaArriba = new THREE.TextureLoader().load("./assets/nieve.jpg");
    var materialArriba = new THREE.MeshLambertMaterial({ map: texturaArriba });
    var arriba = new THREE.Mesh(esferaArriba, materialArriba);
    //scene.add(arriba);
    arriba.position.set(0, 23, 0);

    // ESFERA EN MEDIO
    var esferaMedio = new THREE.SphereGeometry(8);
    var medio = new THREE.Mesh(esferaMedio, materialArriba);
    //scene.add(medio);
    medio.position.set(0, 12, 0);

    // ESFERA ABAJO
    var esferaAbajo = new THREE.SphereGeometry(10);
    var abajo = new THREE.Mesh(esferaAbajo, materialArriba);
    //scene.add(abajo);
    abajo.position.set(0, 0, 0);

    // SOMBRERO
    var cilindroSombrero = new THREE.CylinderGeometry(4, 4, 8, 50);
    var texturaSombrero = new THREE.TextureLoader().load("./assets/sombrero.jpg");
    var materialSombrero = new THREE.MeshLambertMaterial({ map: texturaSombrero });
    var meshSombrero = new THREE.Mesh(cilindroSombrero, materialSombrero);
    //scene.add(meshSombrero);
    meshSombrero.position.set(0, 32, 0);
    meshSombrero.rotation.y = 3; 

    // BASE SOMBRERO ROJA
    var cilindroBaseSombreroRoja = new THREE.CylinderGeometry(4.5, 4.5, 1.2, 50);
    var texturaBaseSombreroRoja = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialBaseSombreroRoja = new THREE.MeshLambertMaterial({ map: texturaBaseSombreroRoja });
    var meshBaseSombreroRoja = new THREE.Mesh(cilindroBaseSombreroRoja, materialBaseSombreroRoja);
    //scene.add(meshBaseSombreroRoja);
    meshBaseSombreroRoja.position.set(0, 28.6, 0);

    // DECORACIÓN AMARILLA
    var esferaDecoracionAmarilla = new THREE.SphereGeometry(0.7);
    var texturaDecoracionAmarilla = new THREE.TextureLoader().load("./assets/estrella.jpg");
    var materialDecoracionAmarilla = new THREE.MeshLambertMaterial({ map: texturaDecoracionAmarilla });
    var decoracionAmarilla = new THREE.Mesh(esferaDecoracionAmarilla, materialDecoracionAmarilla);
    //scene.add(decoracionAmarilla);
    decoracionAmarilla.position.set(-1.8, 28.6, 4);

    //ESTRELLA
    var geometry = new RoundedBoxGeometry (.8,.8,.8,10,10);
    var textura = new THREE.TextureLoader().load("./assets/pino.jpg");
    var material1 = new THREE.MeshLambertMaterial({ map: textura });
    
    var mesh1 = new THREE.Mesh(geometry,material1);
    var mesh2 = new THREE.Mesh(geometry,material1);

    //ROTACION DE PICOS
    mesh1.scale.set(1,5,1);
    mesh2.scale.set(1,5,1);

    mesh1.position.set(-2,28.8,3.9);
    mesh2.position.set(-1.8,28.98,4);

    //AÑADIR A ESCENA 
    //scene.add(mesh1);  
    //scene.add(mesh2);

    //ROTAR
    mesh1.rotation.z = 0.9;
   
    // BASE SOMBRERO 
    var cilindroBaseSombrero = new THREE.CylinderGeometry(7, 7, 1, 50);
    var texturaBaseSombrero = new THREE.TextureLoader().load("./assets/sombrero.jpg");
    var materialBaseSombrero = new THREE.MeshLambertMaterial({ map: texturaBaseSombrero });
    var meshBaseSombrero = new THREE.Mesh(cilindroBaseSombrero, materialBaseSombrero);
    //scene.add(meshBaseSombrero);
    meshBaseSombrero.position.set(0, 27.5, 0);

    // OJO IZQUIERDO
    var esferaOjoIzquierdo = new THREE.SphereGeometry(1.1);
    var materialOjoIzquierdo = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var ojoIzquierdo = new THREE.Mesh(esferaOjoIzquierdo, materialOjoIzquierdo);
    //scene.add(ojoIzquierdo);
    ojoIzquierdo.position.set(-1.25, 24.1, 5);

    // OJO DERECHO
    var esferaOjoDerecho = new THREE.SphereGeometry(1.1);
    var ojoDerecho = new THREE.Mesh(esferaOjoDerecho, materialOjoIzquierdo);
    //scene.add(ojoDerecho);
    ojoDerecho.position.set(1.25, 24.1, 5);

    // BRILLO 1 OJO IZQUIERDO
    var esferaBrilloOjoIzquierdo1 = new THREE.SphereGeometry(0.18);
    var materialBrillo = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    var brilloOjoIzquierdo1 = new THREE.Mesh(esferaBrilloOjoIzquierdo1, materialBrillo );
    //scene.add(brilloOjoIzquierdo1);
    brilloOjoIzquierdo1.position.set(-1.45, 24.3, 5.9);

    // BRILLO 2 OJO IZQUIERDO 
    var esferaBrilloOjoIzquierdo2 = new THREE.SphereGeometry(0.3);
    var brilloOjoIzquierdo2 = new THREE.Mesh(esferaBrilloOjoIzquierdo2, materialBrillo );
    //scene.add(brilloOjoIzquierdo2);
    brilloOjoIzquierdo2.position.set(-1.6, 24.5, 5.7);

    // BRILLO 1 OJO DERECHO
    var esferaBrilloOjoDerecho1 = new THREE.SphereGeometry(0.18);
    var brilloOjoDerecho1 = new THREE.Mesh(esferaBrilloOjoDerecho1, materialBrillo);
    //scene.add(brilloOjoDerecho1);
    brilloOjoDerecho1.position.set(1.45, 24.3, 5.9);

    // BRILLO 2 OJO DERECHO
    var esferaBrilloOjoDerecho2 = new THREE.SphereGeometry(0.3);
    var brilloOjoDerecho2 = new THREE.Mesh(esferaBrilloOjoDerecho2, materialBrillo);
    //scene.add(brilloOjoDerecho2);
    brilloOjoDerecho2.position.set(1.6, 24.5, 5.7);

    // NARIZ
    var cilindroNariz = new THREE.CylinderGeometry(0, 0.75, 4.1, 50);
    var texturaNariz = new THREE.TextureLoader().load("./assets/nariz.jpg");
    var materialNariz = new THREE.MeshLambertMaterial({ map: texturaNariz });
    var meshNariz = new THREE.Mesh(cilindroNariz, materialNariz);
    //scene.add(meshNariz);
    meshNariz.position.set(0, 22.7, 7.9);
    meshNariz.rotation.x = Math.PI / 1.9;  // Rotación de 90 grados en el eje X

    // BOCA - Parte central
    var esferaBocaCentral = new THREE.SphereGeometry(0.6);
    var materialBoca = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var bocaCentral = new THREE.Mesh(esferaBocaCentral, materialBoca);
    //scene.add(bocaCentral);
    bocaCentral.position.set(0, 21, 5.3);

    // BOCA - Lado izquierdo
    var esferaBocaIzquierda = new THREE.SphereGeometry(0.5);
    var bocaIzquierda = new THREE.Mesh(esferaBocaIzquierda, materialBoca);
    //scene.add(bocaIzquierda);
    bocaIzquierda.position.set(-0.9, 21.1, 5.3);

    // BOCA - Lado derecho
    var esferaBocaDerecha = new THREE.SphereGeometry(0.5);
    var bocaDerecha = new THREE.Mesh(esferaBocaDerecha, materialBoca);
    //scene.add(bocaDerecha);
    bocaDerecha.position.set(0.9, 21.1, 5.3);

    // BOCA - Extremo izquierdo
    var esferaBocaExtremoIzquierda = new THREE.SphereGeometry(0.4);
    var bocaExtremoIzquierda = new THREE.Mesh(esferaBocaExtremoIzquierda, materialBoca);
    //scene.add(bocaExtremoIzquierda);
    bocaExtremoIzquierda.position.set(-1.6, 21.3, 5.3);

    // BOCA - Extremo derecho
    var esferaBocaExtremoDerecha = new THREE.SphereGeometry(0.4);
    var bocaExtremoDerecha = new THREE.Mesh(esferaBocaExtremoDerecha, materialBoca);
    //scene.add(bocaExtremoDerecha);
    bocaExtremoDerecha.position.set(1.6, 21.3, 5.3);

    // MEJILLA IZQUIERDA
    var esferaMejillaIzquierda = new THREE.SphereGeometry(0.7);
    var texturaMejilla = new THREE.TextureLoader().load("./assets/mejilla.jpg");
    var materialMejilla = new THREE.MeshLambertMaterial({ map: texturaMejilla });
    var mejillaIzquierda = new THREE.Mesh(esferaMejillaIzquierda, materialMejilla);
    //scene.add(mejillaIzquierda);
    mejillaIzquierda.position.set(-2.6, 22.4, 4.8);

    // MEJILLA DERECHA
    var esferaMejillaDerecha = new THREE.SphereGeometry(0.7);
    var mejillaDerecha = new THREE.Mesh(esferaMejillaDerecha, materialMejilla);
    //scene.add(mejillaDerecha);
    mejillaDerecha.position.set(2.6, 22.4, 4.8);

    // BUFANDA
    var cilindroBaseSombreroRoja = new THREE.CylinderGeometry(6, 6, 1.5, 50);
    var texturaBaseSombreroRoja = new THREE.TextureLoader().load("./assets/esfera2.jpg");
    var materialBaseSombreroRoja = new THREE.MeshLambertMaterial({ map: texturaBaseSombreroRoja });
    var meshBaseSombreroRoja2 = new THREE.Mesh(cilindroBaseSombreroRoja, materialBaseSombreroRoja);
    //scene.add(meshBaseSombreroRoja2);
    meshBaseSombreroRoja2.position.set(0, 18.1, 0);

    // COLGANTE 1
    var baseColgante1 = new RoundedBoxGeometry(2, 8, 1, 6, 1);
    var meshColgante1 = new THREE.Mesh(baseColgante1, materialBaseSombreroRoja);
    //scene.add(meshColgante1);
    meshColgante1.position.set(4, 15, 5.9);
    meshColgante1.rotation.x = 5.9;
    meshColgante1.rotation.y = -5.7;
    meshColgante1.rotation.z = -6.1;

    // COLGANTE 2
    var baseColgante2 = new RoundedBoxGeometry(2, 4, 1, 6, 1);
    var meshColgante2 = new THREE.Mesh(baseColgante2, materialBaseSombreroRoja);
    //scene.add(meshColgante2);
    meshColgante2.position.set(3, 16.95, 5.8);
    meshColgante2.rotation.x = 5.9;
    meshColgante2.rotation.y = -6;
    meshColgante2.rotation.z = -6.2;
   
    // BOTON 1
    var esferaBoton1 = new THREE.SphereGeometry(0.7);
    var boton1 = new THREE.Mesh(esferaBoton1, materialBaseSombrero);
    //scene.add(boton1);
    boton1.position.set(0, 15, 7);

    // BOTON 2
    var esferaBoton2 = new THREE.SphereGeometry(0.8);
    var boton2 = new THREE.Mesh(esferaBoton2, materialBaseSombrero);
    //scene.add(boton2);
    boton2.position.set(0, 13.1, 7.5);

    // BOTON 3
    var esferaBoton3 = new THREE.SphereGeometry(0.9);
    var boton3 = new THREE.Mesh(esferaBoton3, materialBaseSombrero);
    //scene.add(boton3);
    boton3.position.set(0, 11, 7.5);

    // TEXTURA PARA LOS BRAZOS
    var texturaEsqueleto = new THREE.TextureLoader().load("./assets/tronco.jpg");
    var materialEsqueleto = new THREE.MeshLambertMaterial({ map: texturaEsqueleto });

    // BRAZO IZQUIERDO
    var geometriaBrazoIzquierdo = new THREE.CylinderGeometry(0.4, 0.6, 8, 32); 
    var brazoIzquierdo = new THREE.Mesh(geometriaBrazoIzquierdo, materialEsqueleto);
    //scene.add(brazoIzquierdo);
    brazoIzquierdo.position.set(-10.5, 15, 0);
    brazoIzquierdo.rotation.z = 1.2;

    // DEDO 1 IZQUIERDO
    var geometriaDedo1Izquierdo = new THREE.CylinderGeometry(0.4, 0.5, 2.5, 32); 
    var dedo1Izquierdo = new THREE.Mesh(geometriaDedo1Izquierdo, materialEsqueleto);
    //scene.add(dedo1Izquierdo);
    dedo1Izquierdo.position.set(-13, 15, 0);
    dedo1Izquierdo.rotation.z = 2;

    // DEDO 2 IZQUIERDO
    var geometriaDedo2Izquierdo = new THREE.CylinderGeometry(0.4, 0.5, 2.5, 32); 
    var dedo2Izquierdo = new THREE.Mesh(geometriaDedo2Izquierdo, materialEsqueleto);
    //scene.add(dedo2Izquierdo);
    dedo2Izquierdo.position.set(-12.4, 16.7, 0);
    dedo2Izquierdo.rotation.z = 0.5;

    // BRAZO DERECHO
    var geometriaBrazoDerecho = new THREE.CylinderGeometry(0.4, 0.6, 8, 32); 
    var brazoDerecho = new THREE.Mesh(geometriaBrazoDerecho, materialEsqueleto);
    //scene.add(brazoDerecho);
    brazoDerecho.position.set(10.5, 15, 0);
    brazoDerecho.rotation.z = -1.2;

    // DEDO 1 DERECHO
    var geometriaDedo1Derecho = new THREE.CylinderGeometry(0.4, 0.5, 2.5, 32); 
    var dedo1Derecho = new THREE.Mesh(geometriaDedo1Derecho, materialEsqueleto);
    //scene.add(dedo1Derecho);
    dedo1Derecho.position.set(13, 15, 0);
    dedo1Derecho.rotation.z = -2;

    // DEDO 2 DERECHO
    var geometriaDedo2Derecho = new THREE.CylinderGeometry(0.4, 0.5, 2.5, 32); 
    var dedo2Derecho = new THREE.Mesh(geometriaDedo2Derecho, materialEsqueleto);
    //scene.add(dedo2Derecho);
    dedo2Derecho.position.set(12.4, 16.7, 0);
    dedo2Derecho.rotation.z = -0.5;

var muñequito = new THREE.Group();
muñequito.add(
  arriba, 
  medio, 
  abajo, 
  meshSombrero, 
  meshBaseSombreroRoja, 
  decoracionAmarilla, 
  mesh1, 
  mesh2, 
  meshBaseSombrero, 
  ojoIzquierdo, 
  ojoDerecho, 
  brilloOjoIzquierdo1, 
  brilloOjoIzquierdo2, 
  brilloOjoDerecho1, 
  brilloOjoDerecho2, 
  meshNariz, 
  bocaCentral, 
  bocaIzquierda, 
  bocaDerecha, 
  bocaExtremoIzquierda, 
  bocaExtremoDerecha, 
  mejillaIzquierda, 
  mejillaDerecha,
  meshBaseSombreroRoja2, 
  meshColgante1,
  meshColgante2,
  boton1, 
  boton2, 
  boton3, 
  brazoIzquierdo, 
  dedo1Izquierdo, 
  dedo2Izquierdo, 
  brazoDerecho, 
  dedo1Derecho, 
  dedo2Derecho
);
muñequito.position.set(x, y, z);  
return muñequito;
}

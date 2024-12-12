import * as THREE from './three.module.js';
import { RoundedBoxGeometry } from './RoundedBoxGeometry.js';
import esfera1 from './esfera1.js';
import esfera2 from './esfera2.js';

export default function arbol({ x, y, z }) {
    // Crear el grupo principal
    var arbolito = new THREE.Group();

    // PISOS DEL ÁRBOL
    function crearPiso(altura, radio, textura, repeticion) {
        var geometria = new THREE.CylinderGeometry(0, radio, altura, 10);
        var texturaCargada = new THREE.TextureLoader().load(textura);
        texturaCargada.wrapS = texturaCargada.wrapT = THREE.RepeatWrapping;
        texturaCargada.repeat.set(repeticion, 1);
        var material = new THREE.MeshLambertMaterial({ map: texturaCargada });
        return new THREE.Mesh(geometria, material);
    }

    var piso1 = crearPiso(7, 4, "./assets/pino.jpg", 3.5);
    piso1.position.set(0, 16, 0);
    arbolito.add(piso1);

    var piso2 = crearPiso(10, 7, "./assets/pino.jpg", 4.5);
    piso2.position.set(0, 12, 0);
    arbolito.add(piso2);

    var piso3 = crearPiso(13, 10, "./assets/pino.jpg", 5.5);
    piso3.position.set(0, 8, 0);
    arbolito.add(piso3);

    var piso4 = crearPiso(16, 13, "./assets/pino.jpg", 6);
    piso4.position.set(0, 4, 0);
    arbolito.add(piso4);

    var piso5 = crearPiso(22, 16, "./assets/pino.jpg", 6);
    piso5.position.set(0, 0, 0);
    arbolito.add(piso5);

    // ESTRELLA EN LA CIMA
    var estrellaGeom = new RoundedBoxGeometry(1.5, 1.5, 1.5, 10, 10);
    var texturaEstrella = new THREE.TextureLoader().load("./assets/estrella.jpg");
    var materialEstrella = new THREE.MeshLambertMaterial({ map: texturaEstrella });

    var estrella1 = new THREE.Mesh(estrellaGeom, materialEstrella);
    estrella1.scale.set(1, 5, 1);
    estrella1.position.set(0, 20, 0);
    arbolito.add(estrella1);

    var estrella2 = estrella1.clone();
    estrella2.rotation.z = 0.785;
    arbolito.add(estrella2);

    var estrella3 = estrella1.clone();
    estrella3.rotation.z = 1.57;
    arbolito.add(estrella3);

    var estrella4 = estrella1.clone();
    estrella4.rotation.z = 2.355;
    arbolito.add(estrella4);

    // TRONCO DEL ÁRBOL
    var troncoGeom = new THREE.CylinderGeometry(3.5, 5, 7, 50);
    var texturaTronco = new THREE.TextureLoader().load("./assets/tronco.jpg");
    var materialTronco = new THREE.MeshLambertMaterial({ map: texturaTronco });
    var tronco = new THREE.Mesh(troncoGeom, materialTronco);
    tronco.position.set(0, -14, 0);
    arbolito.add(tronco);

    // FUNCIÓN PARA CLONAR ESFERAS
    function crearClonesEsfera(baseObject, numClones, radio, altura, rotacion) {
        for (var i = 0; i < numClones; i++) {
            var angle = (i * 2 * Math.PI) / numClones + rotacion;
            var x = radio * Math.cos(angle);
            var z = radio * Math.sin(angle);
            var clone = baseObject.clone();
            clone.position.set(x, altura, z);
            arbolito.add(clone);
        }
    }

    // ESFERA 1
    var esferaBase1 = esfera1({ x: 0, y: 0, z: 0 });
    esferaBase1.scale.set(0.22, 0.22, 0.22);

    crearClonesEsfera(esferaBase1, 3, 3, 14, 0);
    crearClonesEsfera(esferaBase1, 3, 5.4, 9.3, 2);
    crearClonesEsfera(esferaBase1, 6, 8.3, 3.8, Math.PI / 2.2);
    crearClonesEsfera(esferaBase1, 6, 11, -1.3, 9);
    crearClonesEsfera(esferaBase1, 8, 14, -7.8, 0.34);

    // ESFERA 2
    var esferaBase2 = esfera2({ x: 0, y: 0, z: 0 });
    esferaBase2.scale.set(0.22, 0.22, 0.22);

    crearClonesEsfera(esferaBase2, 3, 4, 11, 1);
    crearClonesEsfera(esferaBase2, 6, 7, 5.6, 4);
    crearClonesEsfera(esferaBase2, 6, 9.8, 0.2, Math.PI / 3);
    crearClonesEsfera(esferaBase2, 8, 12.4, -5.5, Math.PI / 2);
    crearClonesEsfera(esferaBase2, 8, 15, -10, 3.1);

    // POSICIÓN FINAL DEL ÁRBOL
    arbolito.position.set(x, y, z);

    return arbolito;
}

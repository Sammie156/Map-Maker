import * as THREE from "three";
import type { EditorObject } from "../utils/types";
import { uuid } from "../utils/id";

function createCylinder() : EditorObject {
    const geometry = new THREE.CylinderGeometry(1, 1, 1, 16);
    const material = new THREE.MeshStandardMaterial({
        color: 0x999999,
        roughness: 0.8,
        metalness: 0.1,
    });

    const mesh =  new THREE.Mesh(geometry, material);

    mesh.position.set(0, 0.5, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return {
        id: uuid(),
        type: "cylinder",
        mesh,
    };
}

export default createCylinder;
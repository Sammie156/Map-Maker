import { uuid } from "../utils/id";
import type { EditorObject } from "../utils/types";
import * as THREE from "three";

function createCube(): EditorObject {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({
        color: 0x999999,
        roughness: 0.8,
        metalness: 0.1,
    });

    const mesh = new THREE.Mesh(geometry, material);

    // Default placement
    mesh.position.set(0, 0.5, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return {
        id: uuid(),
        type: "cube",
        mesh,
    };
}

export default createCube;
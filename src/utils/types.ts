import * as THREE from "three";

export type EditorObject = {
    id: string;
    type: string;
    mesh: THREE.Object3D;
};
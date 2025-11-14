import * as THREE from "three";


// TODO: Expand this later for more complex working
export type EditorObject = {
    id: string;
    type: string;
    mesh: THREE.Object3D;
};
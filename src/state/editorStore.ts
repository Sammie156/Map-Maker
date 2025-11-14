import { create } from "zustand";
import type { EditorObject } from "../utils/types";

type TransformMode = "translate" | "rotate" | "scale";

type EditorState = {
    objects: EditorObject[];
    transformMode: TransformMode;

    addObject: (obj: EditorObject) => void;
    removeObject: (id: string) => void;
    setTransformMode: (m: TransformMode) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
    objects: [],
    transformMode: "translate",

    addObject: (obj) => 
        set((state) => ({
            objects: [...state.objects, obj],
        })),

    removeObject: (id) =>
        set((state) => ({
            objects: state.objects.filter((o) => o.id !== id),
        })),
    
    setTransformMode: (m) => set({transformMode: m}),
}));
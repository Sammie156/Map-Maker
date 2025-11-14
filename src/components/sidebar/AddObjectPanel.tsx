import createCube from "../../objects/Cube";
import createCylinder from "../../objects/Cylinder";
import createSphere from "../../objects/Sphere";
import { useEditorStore } from "../../state/editorStore";

function AddObjectPanel() {
    const addObject = useEditorStore((s) => s.addObject);

    return (
        <div className="bg-neutral-700 p-3 rounded">
            <h3 className="text-sm font-bold mb-2">Add Object</h3>

            <div className="flex flex-col gap-2">
                <button
                    className="px-3 py-1 bg-neutral-600 rounded hover:bg-neutral-500"
                    onClick={() => addObject(createCube())}
                >
                    Cube
                </button>

                <button
                    className="px-3 py-1 bg-neutral-600 rounded hover:bg-neutral-500"
                    onClick={() => addObject(createSphere())}
                >
                    Sphere
                </button>

                <button
                    className="px-3 py-1 bg-neutral-600 rounded hover:bg-neutral-500"
                    onClick={() => addObject(createCylinder())}
                >
                    Cylinder
                </button>
            </div>
        </div>
    );
}

export default AddObjectPanel;
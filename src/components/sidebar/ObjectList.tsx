import { useEditorStore } from "../../state/editorStore";
import { useSelectionStore } from "../../state/selectionStore";

export default function ObjectList() {
  const objects = useEditorStore((s) => s.objects);
  const selectedId = useSelectionStore((s) => s.selectedId);
  const setSelected = useSelectionStore((s) => s.setSelected);

  return (
    <div className="bg-neutral-700 p-3 rounded h-full overflow-auto">
      <h3 className="text-sm font-bold mb-2">Objects in Scene</h3>

      <div className="flex flex-col gap-2">
        {objects.map((obj) => (
          <div
            key={obj.id}
            onClick={() => setSelected(obj.id)}
            className={`px-2 py-1 rounded cursor-pointer ${
              selectedId === obj.id ? "bg-blue-600" : "bg-neutral-600"
            }`}
          >
            {obj.type} ({obj.id})
          </div>
        ))}
      </div>
    </div>
  );
}

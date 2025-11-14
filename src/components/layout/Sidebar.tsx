import AddObjectPanel from "../sidebar/AddObjectPanel";
import ObjectList from "../sidebar/ObjectList";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-neutral-800 p-4 flex flex-col gap-4 border-r border-neutral-700">
      <AddObjectPanel />
      <ObjectList />
    </aside>
  );
}

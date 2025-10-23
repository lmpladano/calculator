import Numbers from "./Numbers";
import Operators from "./Operators";

export default function Inputs({ onPush }) {
  return (
    <div className="grid grid-cols-4 gap-4 bg-blue-950 p-10">
      <Operators onPush={onPush} />
      <Numbers onPush={onPush} />
    </div>
  );
}

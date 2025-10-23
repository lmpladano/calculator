import Numbers from "./Numbers";
import Operators from "./Operators";

export default function Inputs({ onPush }) {
  return (
    <div className="grid grid-flow-col grid-rows-4 gap-4 bg-blue-950 p-10">
      <Numbers onPush={onPush} />
      <Operators onPush={onPush} />
    </div>
  );
}

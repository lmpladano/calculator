import Numbers from "./Numbers";
import Operators from "./Operators";

export default function Inputs({ onPush }) {
  return (
    <>
      <Numbers onPush={onPush} />
      <Operators onPush={onPush} />
    </>
  );
}

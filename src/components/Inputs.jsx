export default function Inputs({ onPush }) {
  const layout = [
    ["MC", "MR", "M-", "M+"],
    ["c", "magic", "round", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  let spButtons = { 4: "bg-red-900", 5: "bg-red-300", 19: "row-span-2" };

  const buttons = layout.flat().map((item, i) => {
    return (
      <button key={i} onClick={onPush} value={item} className={spButtons[i]}>
        {item}
      </button>
    );
  });

  console.log(buttons);
  return (
    <div className="grid grid-cols-4 gap-4 border-2 border-white px-6 py-9">
      {buttons}
    </div>
  );
}

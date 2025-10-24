export default function Inputs({ onPush }) {
  const layout = [
    ["MC", "MR", "M-", "M+"],
    ["c", "magic", "round", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const buttons = layout.flat().map((item) => {
    return item == "+" ? (
      <button onClick={onPush} value={item} className="row-span-2">
        {item}
      </button>
    ) : (
      <button onClick={onPush} value={item}>
        {item}
      </button>
    );
  });
  return (
    <div className="grid grid-cols-4 gap-4 bg-gray-500 px-2 py-9">
      {buttons}
    </div>
  );
}

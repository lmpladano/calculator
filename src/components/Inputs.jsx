export default function Inputs({ onPush }) {
  const layout = [
    ["MC", "MR", "M-", "M+"],
    ["c", "magic", "round", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  const buttons = layout.flat().map((item, i) => {
    if (item == "c") {
      return (
        <button key={i} onClick={onPush} value={item} className="bg-red-900">
          {item}
        </button>
      );
    }
    return item == "+" ? (
      <button key={i} onClick={onPush} value={item} className="row-span-2">
        {item}
      </button>
    ) : (
      <button key={i} onClick={onPush} value={item}>
        {item}
      </button>
    );
  });
  return (
    <div className="grid grid-cols-4 gap-4 border-2 border-white px-6 py-9">
      {buttons}
    </div>
  );
}

export default function Operators({ onPush }) {
  const operators = ["-", "=", "x", "/", "+"];

  const nInputs = operators.map((item) => {
    return (
      <>
        {item == "+" ? (
          <div className="row-span-2 grid subgrid gap-4">
            <button onClick={onPush} value={item} className="row-span-4">
              {item}
            </button>
          </div>
        ) : (
          <div className="row-span-1 grid subgrid gap-4">
            <button onClick={onPush} value={item}>
              {item}
            </button>
          </div>
        )}
      </>
    );
  });

  return <>{nInputs}</>;
}

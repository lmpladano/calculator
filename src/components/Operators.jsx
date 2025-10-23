export default function Operators({ onPush }) {
  const operators = ["-", "=", "x", "/", "magic", "round", "+", "c"];

  const nInputs = operators.map((item) => {
    return (
      <>
        {item == "+" ? (
          <div>
            <button onClick={onPush} value={item}>
              {item}
            </button>
          </div>
        ) : (
          <div>
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

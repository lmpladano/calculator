export default function Operators({ onPush }) {
  const operators = ["-", "=", "x", "/", "magic", "round", "+", "c"];

  const nInputs = operators.map((item) => {
    return (
      <>
        <button onClick={onPush} value={item}>
          {item}
        </button>
      </>
    );
  });

  return <>{nInputs}</>;
}

export default function Operators({ onPush }) {
  const operators = ["+", "-", "x", "/", "="];

  const nInputs = operators.map((item) => {
    return (
      <button onClick={onPush} value={item}>
        {item}
      </button>
    );
  });

  return <>{nInputs}</>;
}

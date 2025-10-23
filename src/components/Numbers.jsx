export default function Numbers({ onPush }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nInputs = numbers.map((item) => {
    return (
      <div className="">
        <button onClick={onPush} value={item}>
          {item}
        </button>
      </div>
    );
  });

  return <>{nInputs}</>;
}

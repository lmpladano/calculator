export default function Numbers({ onPush }) {
  const numbers = [".", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const nInputs = numbers.map((item) => {
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

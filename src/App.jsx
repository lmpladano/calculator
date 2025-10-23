import { useState } from "react";
import Inputs from "./components/Inputs";

function App() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [num, setNum] = useState("");
  const [numT, setNumT] = useState("");

  function handleClick(e) {
    const operators = ["+", "-", "x", "/", "="];
    let input = e.target.value;
    setDisplay((prev) => prev + input);

    if (operators.includes(input)) {
      numT != "" ? equals(input) : setOperator(input);
    } else {
      operator == ""
        ? setNum((prev) => prev + input)
        : setNumT((prev) => prev + input);
    }
  }

  function equals(input) {
    let result;
    if (operator == "+") {
      result = Number(num) + Number(numT);
    } else if (operator == "-") {
      result = Number(num) - Number(numT);
    } else if (operator == "x") {
      result = Number(num) * Number(numT);
    } else if (operator == "/") {
      result = Number(num) / Number(numT);
    }
    console.log(result);
    setNum(result);
    setNumT("");
    setOperator(input);
    input == "=" ? setDisplay(`${result}`) : setDisplay(`${result}${input}`);
  }

  return (
    <>
      <h1>{display}</h1>
      <Inputs onPush={handleClick} />
    </>
  );
}

export default App;

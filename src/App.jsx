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

    if (input == "c") {
      setDisplay("");
      setNum("");
      setNumT("");
      setOperator("");
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
    <div className="flex flex-col justify-center bg-gray-500">
      <h1 className="text-white-200 ">{display ? display : 0}</h1>
      <Inputs onPush={handleClick} />
    </div>
  );
}

export default App;

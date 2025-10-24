import { useState } from "react";
import Inputs from "./components/Inputs";

function App() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [num, setNum] = useState("");
  const [numT, setNumT] = useState("");

  function handleClick(e) {
    const operators = [
      ["+", "-", "x", "/", "="],
      ["MC", "MR", "M-", "M+", "magic"],
    ];
    let input = e.target.value;

    operators[1].includes(input)
      ? memoryHanlder(input)
      : setDisplay((prev) => prev + input);

    if (operators.flat().includes(input)) {
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

  function memoryHanlder(input) {
    let mem = JSON.parse(localStorage.getItem("memory")) || [];
    if (input == "M+") {
      mem.unshift(numT ? Number(numT) : Number(num));
      localStorage.setItem("memory", JSON.stringify(mem));
    } else if (input == "M-") {
      mem.shift(numT ? Number(numT) : Number(num));
      localStorage.setItem("memory", JSON.stringify(mem));
    } else if (input == "MR") {
      setDisplay((prev) => prev + mem[0]);
      setNum(mem[0]);
    } else if (input == "MC") {
      localStorage.setItem("memory", JSON.stringify([]));
    } else {
      let initial = 0;
      let sum = mem.reduce((n, c) => n + c, initial);
      setDisplay(sum);
      setNum(sum);
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
    <div className="flex flex-col justify-center bg-gray-700 py-10 px-5">
      <div className=" bg-emerald-500 flex flex-col my-4 text-black">
        <h3 className="self-end text-6xl p-2">{display ? display : 0}</h3>
      </div>
      <Inputs onPush={handleClick} />
    </div>
  );
}

export default App;

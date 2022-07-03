import { useState } from "react";
import { cells, numbericKeys, operatorKeys } from "./helpers";

const Total = ({ total }: { total: any }): JSX.Element => {
  return <div className="total">{total}</div>;
};

const App = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<OperatorType | null>(null);

  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);

  const clearValues = () => {
    setDisplay("0");
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator(null);
  };

  const calculateNewValue = () => {
    let newDisplay = 0;
    switch (operator) {
      case "+":
        newDisplay = firstNumber + secondNumber;
        break;
      case "x":
        newDisplay = firstNumber * secondNumber;
        break;
      case "/":
        newDisplay = firstNumber / secondNumber;
        break;
      case "-":
        newDisplay = firstNumber - secondNumber;
        break;
    }
    setDisplay(newDisplay.toString());
    setFirstNumber(newDisplay);
    setSecondNumber(0);
  };

  const handleButtonClick = (key: OperatorType | KeyBoardType) => {
    if (numbericKeys.includes(key)) {
      // if (key === "." && display.includes(".")) return;
      if (!operator) {
        const first = firstNumber === 0 ? key : display + key;
        setFirstNumber(parseFloat(first));
        setDisplay(first.toString());
      } else {
        const second = secondNumber === 0 ? key : display + key;
        setSecondNumber(parseFloat(second));
        setDisplay(second.toString());
      }
    } else if (key === "AC") clearValues();
    else if (operatorKeys.includes(key)) {
      if (operator && firstNumber !== 0 && secondNumber !== 0)
        calculateNewValue();
      setOperator(key as OperatorType);
    }
  };

  return (
    <div className="calculator">
      <Total total={display} />
      <div className="cell-container">
        {cells.map(({ className, label }) => (
          <button
            key={label}
            className={`${className}`}
            onClick={() =>
              handleButtonClick(label as KeyBoardType | OperatorType)
            }
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;

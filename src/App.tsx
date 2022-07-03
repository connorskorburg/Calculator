import { SetStateAction, Dispatch, useState } from "react";
import { cells, numbericKeys, operatorKeys } from "./helpers";

const Total = ({ total }: { total: string }): JSX.Element => {
  return <div className="total">{total}</div>;
};

const App = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<OperatorType | null>(null);

  const [total, setTotal] = useState<number>(0);
  const [input, setInput] = useState<number>(0);

  const clearValues = () => {
    setDisplay("0");
    setTotal(0);
    setInput(0);
    setOperator(null);
  };

  const handleNegativeNumber = (
    value: number,
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    const newValue = value * -1;
    setValue(newValue);
    setDisplay(newValue.toString());
  };

  const calculateNewValue = () => {
    let newDisplay = 0;
    switch (operator) {
      case "+":
        newDisplay = total + input;
        break;
      case "x":
        newDisplay = total * input;
        break;
      case "/":
        newDisplay = total / input;
        break;
      case "-":
        newDisplay = total - input;
        break;
    }
    setDisplay(newDisplay.toString());
    setTotal(newDisplay);
    setInput(0);
  };

  const handleKeyChange = (
    key: KeyBoardType,
    value: number,
    setValue: Dispatch<SetStateAction<number>>
  ) => {
    if (key === "." && display.includes(".")) return;
    const newValue = value === 0 ? key : display + key;
    setValue(parseFloat(newValue));
    setDisplay(newValue.toString());
  };

  const handleButtonClick = (key: OperatorType | KeyBoardType) => {
    if (numbericKeys.includes(key)) {
      handleKeyChange(
        key as KeyBoardType,
        !operator ? total : input,
        !operator ? setTotal : setInput
      );
    } else if (key === "AC") {
      clearValues();
    } else if (key === "+/-") {
      handleNegativeNumber(
        !operator ? total : input,
        !operator ? setTotal : setInput
      );
    } else if (operatorKeys.includes(key)) {
      if (operator && total !== 0 && input !== 0) calculateNewValue();
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

import { SetStateAction, Dispatch, useState } from "react";
import { cells, numbericKeys, operatorKeys } from "./helpers";
import Button from "./components/Button";
import Total from "./components/Total";

const App = () => {
  const [display, setDisplay] = useState<string>("0");
  const [operator, setOperator] = useState<OperatorType | null>(null);

  const [total, setTotal] = useState<number | null>(0);
  const [input, setInput] = useState<number | null>(null);

  const [selectedKey, setSelectedKey] = useState<
    OperatorType | KeyBoardType | null
  >(null);

  const clearValues = () => {
    setDisplay("0");
    setTotal(0);
    setInput(null);
    setOperator(null);
  };

  const handleNegativeNumber = (
    value: number | null,
    setValue: Dispatch<SetStateAction<number | null>>
  ) => {
    const newValue = (value || 0) * -1;
    setValue(newValue);
    setDisplay(newValue.toString());
  };

  const calculateNewValue = () => {
    let newDisplay = 0;
    if (total !== null && input !== null) {
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
    }
    setDisplay(newDisplay.toString());
    setTotal(newDisplay);
    setInput(null);
  };

  const handleKeyChange = (
    key: KeyBoardType,
    value: number | null,
    setValue: Dispatch<SetStateAction<number | null>>
  ) => {
    if (key === "." && display.includes(".")) return;
    const newValue = !value ? key : display + key;
    setValue(parseFloat(newValue));
    setDisplay(newValue.toString());
  };

  const handleButtonClick = (key: OperatorType | KeyBoardType) => {
    setSelectedKey(key);
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
      if (operator && total !== null && input !== null) {
        calculateNewValue();
      }
      setOperator(key as OperatorType);
    }
  };

  return (
    <div className="calculator">
      <Total total={display} />
      <div className="cell-container">
        {cells.map(({ className, label }) => (
          <Button
            key={label}
            className={
              selectedKey === label ? `${className}-selected` : className
            }
            label={label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

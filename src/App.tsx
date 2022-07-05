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
    setSelectedKey(null);
  };

  const handlePercentage = () => {
    if (input === null && total) {
      const newValue = total / 100;
      setTotal(newValue);
      setDisplay(newValue.toString());
    } else if (input !== null && total) {
      const newValue = total / (100 / input);
      setInput(newValue);
      setDisplay(newValue.toString());
    }
  };

  const handleNegativeNumber = (
    value: number | null,
    setValue: Dispatch<SetStateAction<number | null>>
  ) => {
    if (value !== null) {
      setDisplay(display.includes("-") ? display.slice(1) : "-" + display);
      setValue(value * -1);
    } else if (value === null) {
      setValue(0);
      setDisplay("-0");
    }
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
    let newValue: string = key;

    if (value !== null) {
      if (key === "." && display.includes(".")) return;
      newValue = display + key;
    } else if (value === null && key === ".") {
      newValue = "0.";
    }

    if (newValue[0] === "0" && !newValue.includes(".") && newValue !== "0") {
      newValue = newValue.slice(1);
    } else if (
      newValue[0] === "-" &&
      newValue.length > 1 &&
      !newValue.includes(".")
    ) {
      if (newValue[1] === "0") {
        newValue = newValue.slice(0, 1) + newValue.slice(2);
      }
    }
    setValue(parseFloat(newValue));
    setDisplay(newValue.toString());
  };

  const handleButtonClick = (key: OperatorType | KeyBoardType) => {
    setSelectedKey(key);
    if (numbericKeys.includes(key)) {
      handleKeyChange(
        key as KeyBoardType,
        operator && operator !== "=" ? input : total,
        operator && operator !== "=" ? setInput : setTotal
      );
    } else if (key === "%") {
      handlePercentage();
    } else if (key === "AC") {
      clearValues();
    } else if (key === "+/-") {
      handleNegativeNumber(
        operator && operator !== "=" ? input : total,
        operator && operator !== "=" ? setInput : setTotal
      );
    } else if (operatorKeys.includes(key)) {
      if (operator && input !== null) {
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

import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("adds -1.5 and .5 together, multiplies by 2", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-.",
    "number-5",
    "operator-+/-",
    "operator-+",
    "number-.",
    "number-5",
    "operator-x",
    "number-2",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-2");
});

test("adds 0.05 and -0.80 together, divides by 10", () => {
  render(<App />);
  const keysPressed = [
    "number-.",
    "number-0",
    "number-5",
    "operator-+",
    "number-.",
    "number-8",
    "number-0",
    "operator-+/-",
    "operator-/",
    "number-1",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-0.075");
});

test("adds 50 and 25% of 50 together", () => {
  render(<App />);
  const keysPressed = [
    "number-5",
    "number-0",
    "operator-+",
    "number-2",
    "number-5",
    "operator-%",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("62.5");
});

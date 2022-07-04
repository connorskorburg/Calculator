import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("subtracts 10 and 5", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "operator--",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("5");
});

test("subtracts -10 and 2", () => {
  render(<App />);
  const keysPressed = [
    "operator-+/-",
    "number-1",
    "number-0",
    "operator--",
    "number-2",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-12");
});

test("subtracts 150 and -50", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-5",
    "number-0",
    "operator--",
    "operator-+/-",
    "number-5",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("200");
});

test("subtracts 0 and 5", () => {
  render(<App />);
  const keysPressed = ["number-0", "operator--", "number-5", "operator-="];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-5");
});

test("subtracts 50 and -0", () => {
  render(<App />);
  const keysPressed = [
    "number-5",
    "number-0",
    "operator--",
    "operator-+/-",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("50");
});

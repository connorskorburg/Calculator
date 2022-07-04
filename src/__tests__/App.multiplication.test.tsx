import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("multiplies 10 and 5 together", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "operator-x",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("50");
});

test("multiplies 0 and 6 together", () => {
  render(<App />);
  const keysPressed = ["number-0", "operator-x", "number-6", "operator-="];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("0");
});

test("multiplies -0 and 1 together", () => {
  render(<App />);
  const keysPressed = [
    "operator-+/-",
    "number-0",
    "operator-x",
    "number-1",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("0");
});

test("multiplies 20, 5 and 2 together", () => {
  render(<App />);
  const keysPressed = [
    "number-2",
    "number-0",
    "operator-x",
    "number-5",
    "operator-x",
    "number-2",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("200");
});

test("multiplies 10, 6 and 0 together", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "operator-x",
    "number-6",
    "operator-x",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("0");
});

test("multiplies -5 and 2 together", () => {
  render(<App />);
  const keysPressed = [
    "operator-+/-",
    "number-5",
    "operator-x",
    "number-2",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-10");
});

import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("divides 100 by 5", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "number-0",
    "operator-/",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("20");
});

test("divides 0 by 5", () => {
  render(<App />);
  const keysPressed = ["number-0", "operator-/", "number-5", "operator-="];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("0");
});

test("divides 5 by 100", () => {
  render(<App />);
  const keysPressed = [
    "number-5",
    "operator-/",
    "number-1",
    "number-0",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("0.05");
});

test("divides 500 by -25", () => {
  render(<App />);
  const keysPressed = [
    "number-5",
    "number-0",
    "number-0",
    "operator-/",
    "operator-+/-",
    "number-2",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-20");
});

test("divides -144 by -12", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-4",
    "number-4",
    "operator-+/-",
    "operator-/",
    "operator-+/-",
    "number-1",
    "number-2",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("12");
});

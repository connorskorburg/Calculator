import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("adds 4 and 5 together", () => {
  render(<App />);
  const keysPressed = ["number-4", "operator-+", "number-5", "operator-="];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("9");
});

test("adds 10 and 85 together", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "operator-+",
    "number-8",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("95");
});

test("adds 8 and 0 together", () => {
  render(<App />);
  const keysPressed = ["number-8", "operator-+", "number-0", "operator-="];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("8");
});

test("adds -14 and 5 together", () => {
  render(<App />);
  const keysPressed = [
    "operator-+/-",
    "number-1",
    "number-4",
    "operator-+",
    "number-5",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-9");
});

test("adds 100 and -19 together", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-0",
    "number-0",
    "operator-+",
    "operator-+/-",
    "number-1",
    "number-9",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("81");
});

test("adds 19 and -0 together", () => {
  render(<App />);
  const keysPressed = [
    "number-1",
    "number-9",
    "operator-+",
    "number-0",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("19");
});

test("adds 0 and -37 together", () => {
  render(<App />);
  const keysPressed = [
    "number-0",
    "operator-+",
    "operator-+/-",
    "number-3",
    "number-7",
    "operator-=",
  ];
  keysPressed.forEach((key) => {
    fireEvent.click(screen.getByTestId(key));
  });
  expect(screen.getByTestId("total").innerHTML).toBe("-37");
});

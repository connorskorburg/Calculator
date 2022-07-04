import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("adds 4 and 5 together", () => {
  render(<App />);
  const totalElem = screen.getByTestId("total");
  const fourElement = screen.getByText("4");
  const fiveElement = screen.getByText("5");
  const addElement = screen.getByText("+");
  const equalElement = screen.getByText("=");

  expect(fourElement).toBeInTheDocument();
  expect(fiveElement).toBeInTheDocument();
  expect(addElement).toBeInTheDocument();
  expect(equalElement).toBeInTheDocument();

  // add 4 plus 5 then press equals
  fireEvent.click(fourElement);
  fireEvent.click(addElement);
  fireEvent.click(fiveElement);
  fireEvent.click(equalElement);

  expect(totalElem.innerHTML).toBe("9");
});

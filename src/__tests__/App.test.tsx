import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("adds 4 and 5 together", () => {
  render(<App />);
  // add 4 plus 5 then press equals
  fireEvent.click(screen.getByText("4"));
  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("5"));
  fireEvent.click(screen.getByText("="));

  expect(screen.getByTestId("total").innerHTML).toBe("9");
});

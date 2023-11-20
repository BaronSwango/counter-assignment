import { render, screen, act } from "@testing-library/react";
import Counter from "../components/Counter";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test("clicking + increments the count", () => {
  const countElement = screen.getByTestId("count");
  const incrementButton = screen.getByRole("button", { name: "+" });

  act(() => {
    incrementButton.click();
  });

  expect(countElement).toHaveTextContent("1");
});

test("clicking - decrements the count", () => {
  const countElement = screen.getByTestId("count");
  const decrementButton = screen.getByRole("button", { name: "-" });

  act(() => {
    decrementButton.click();
  });

  expect(countElement).toHaveTextContent("-1");
});

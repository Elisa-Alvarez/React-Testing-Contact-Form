import React from "react";
import { render, fireEvent,screen} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('renders contactForm', () => {
  const { getByText } = render(<App />);
  const name = getByText(/first Name/i);
  expect (name).toBeInTheDocument()});


  test("Message and that button is clicked", async () => {
  
    const { getByText, queryAllByLabelText } = render(<ContactForm />);
    const input = getByText(/message/i);
    expect(screen.getByRole('button')).toBeEmpty()
    expect(input).toHaveTextContent("Message");
  });

 
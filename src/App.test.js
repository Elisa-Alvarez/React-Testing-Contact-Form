import React from "react";
import { render, fireEvent,screen, getByPlaceholderText, getAllByPlaceholderText, getAllByRole, queryByAttribute, getByText} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});


  


  test("Message and that button is clicked", async() => {
  
    const { getByPlaceholderText, getByText } = render(<ContactForm />);

    const name = getByPlaceholderText(/edd/i);
    fireEvent.change(name, { target: { value: 'Ill' } });

    const last = getByPlaceholderText(/Burke/i);
    fireEvent.change(last, { target: { value: 'Val' } });

    const email =getByPlaceholderText(/bluebill1049@hotmail.com/i);
    fireEvent.change(email, { target: { value: 'Val@gmail.com' } });

    const input = getByText(/message/i);
    

    expect (name).toBeInTheDocument();
    expect (last).toBeInTheDocument();    
    expect(input).toHaveTextContent("Message");
    expect(screen.getByRole('button')).toBeEmpty();
  });

 
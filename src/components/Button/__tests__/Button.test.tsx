import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "../index";


describe("components::Button", () => {
  it("renders the text passed to text property", async () => {
    const props = {
      text: "button text",
      onClick: jest.fn(),
    };

    render(<Button {...props} />)

    const button = await screen.findByRole('button', { name: props.text });

    expect(button).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", async () => {
    const props = {
      text: "button text",
      onClick: jest.fn(),
    };

    const spy = jest.spyOn(props, "onClick");

    render(<Button {...props} />);

    const button = await screen.findByRole('button', { name: props.text })

    fireEvent.click(button);

    expect(spy).toHaveBeenCalled();
  });

  it("should not call onClick when button is clicked if it is disabled", async () => {
    const props = {
      text: "click here",
      onClick: jest.fn(),
      disabled: true,
    };

    const spy = jest.spyOn(props, "onClick");

    render(<Button {...props} />);

    const button = await screen.findByRole('button', { name: props.text })

    fireEvent.click(button);

    expect(spy).not.toHaveBeenCalled();
  });

});

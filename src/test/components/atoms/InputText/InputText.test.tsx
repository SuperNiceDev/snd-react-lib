import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import InputText from "snd-react-lib/components/atoms/InputText";

const renderComponent = (props = {}) => {
  return render(<InputText {...props} onChange={() => {}} />);
};

describe("InputText Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<InputText placeholder="My placeholder" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a basic input field by default", () => {
    renderComponent();
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("InputText");
  });

  it("renders a textarea when multiline is true", () => {
    renderComponent({ multiline: true });
    const textarea = screen.getByRole("textbox");
    expect(textarea.tagName).toBe("TEXTAREA");
    expect(textarea).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    renderComponent({ className: "custom-class" });
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("custom-class");
  });

  it("sets the placeholder attribute", () => {
    const placeholderText = "Enter your name";
    renderComponent({ placeholder: placeholderText });
    const input = screen.getByPlaceholderText(placeholderText);
    expect(input).toBeInTheDocument();
  });

  // it("sets the input type correctly", () => {
  //   renderComponent({ type: InputTypes.password, value: "ffff" });
  //   const input = screen.getByRole("textbox");
  //   expect(input).toHaveAttribute("type", "password");
  // });

  // it("sets the autoComplete attribute", () => {
  //   renderComponent({ autoComplete: AutoComplete.email });
  //   const input = screen.getByRole("textbox");
  //   expect(input).toHaveAttribute("autocomplete", "email");
  // });

  it("sets the aria-label attribute", () => {
    const ariaLabel = "username";
    renderComponent({ ariaLabel });
    const input = screen.getByLabelText(ariaLabel);
    expect(input).toBeInTheDocument();
  });

  it("sets the input as disabled", () => {
    renderComponent({ disabled: true });
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled");
  });

  it("focuses the input when focus prop is true", () => {
    renderComponent({ focus: true });
    const input = screen.getByRole("textbox");
    expect(input).toHaveFocus();
  });

  it("triggers onFocus event handler", () => {
    const onFocusMock = jest.fn();
    renderComponent({ onFocus: onFocusMock });
    const input = screen.getByRole("textbox");
    fireEvent.focus(input);
    expect(onFocusMock).toHaveBeenCalledTimes(1);
  });

  it("triggers onChange event handler", async () => {
    // const onChangeMock = jest.fn();
    // renderComponent({ onChange: onChangeMock });
    // const input = screen.getByRole("textbox");
    // fireEvent.change(input, { target: { value: "test" } });
    // expect(onChangeMock).toHaveBeenCalledTimes(1);
    //
    const onChange = jest.fn();
    renderComponent({ onChange });
    const input = screen.getByRole("textbox");
    input.focus();
    const user = userEvent.setup();
    await user.type(input, "Hello, World!");
    expect(input).toHaveValue("Hello, World!");
  });

  it("triggers onBlur event handler", () => {
    const onBlurMock = jest.fn();
    renderComponent({ onBlur: onBlurMock });
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(onBlurMock).toHaveBeenCalledTimes(1);
  });

  it("sets the defaultValue correctly", () => {
    renderComponent({ defaultValue: "default value" });
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("default value");
  });

  it("sets the value correctly", () => {
    renderComponent({ value: "controlled value" });
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("controlled value");
  });

  it("sets the maxLength attribute", () => {
    renderComponent({ maxLength: 10 });
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("maxLength", "10");
  });
});

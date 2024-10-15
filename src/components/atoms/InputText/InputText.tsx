import React, {
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useRef,
} from "react";

import css from "./InputText.module.scss";

export enum InputTypes {
  text = "text",
  password = "password",
  number = "number",
}

// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete

export enum AutoComplete {
  on = "on",
  off = "off",
  email = "email",
  username = "username",
  name = "name",
  nameGiven = "given-name",
  nameAdditional = "additional-name",
  nameFamily = "family-name",
  streetAddress = "street-address",
  postalCode = "postal-code",
  tel = "tel",
  newPassword = "new-password",
  currentPassword = "current-password",
  currentPasswordConfirm = "current-password-confirm",
}

export type InputTextProps = InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  type?: InputTypes;
  multiline?: boolean;
  focus?: boolean;
  autoComplete?: AutoComplete | string;
  ariaLabel?: string;
};

const InputText = ({
  className,
  type = InputTypes.text,
  name,
  multiline = false,
  focus,
  disabled,
  defaultValue,
  value,
  maxLength,
  placeholder,
  autoComplete,
  ariaLabel,
  onFocus,
  onChange,
  onBlur,
  ...rest
}: InputTextProps): ReactElement => {
  const elemRef = useRef<any>();

  useEffect(() => {
    if (focus) {
      elemRef.current?.focus();
    } else {
      elemRef.current?.blur();
    }
  }, [focus]);

  const Element = !multiline ? "input" : "textarea";
  const clnDisabled = disabled ? ` ${css.disabled} disabled` : "";
  const clnAdd = className ? ` ${className}` : "";
  const cln = `${css.root} InputText${clnDisabled}${clnAdd}`;

  return (
    <Element
      {...rest}
      className={cln}
      ref={elemRef}
      name={name}
      type={type}
      defaultValue={defaultValue}
      value={value}
      maxLength={maxLength}
      disabled={disabled}
      placeholder={placeholder}
      autoComplete={autoComplete}
      aria-label={ariaLabel}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default InputText;

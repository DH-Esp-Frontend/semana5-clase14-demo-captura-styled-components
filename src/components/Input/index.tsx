import React from "react";
import { StyledInput, StyledLabel } from "./styles";

interface IProps {
  label?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  label = "",
  name = "",
  placeholder = "",
  type = "text",
  value,
  onInputChange,
}) => {
  return (
    <>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <StyledInput
        onChange={onInputChange}
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
      />
    </>
  );
};

export default Input;

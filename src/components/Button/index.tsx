import React from "react";
import { IProps, StyledButton } from "./styles";

const Button: React.FC<IProps> = ({
  isActive = false,
  onClick = () => {},
  children,
  disabled = false,
}) => {
  return (
    <StyledButton isActive={isActive} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

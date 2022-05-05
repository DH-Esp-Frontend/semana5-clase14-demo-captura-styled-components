import styled, { css } from "styled-components";

export interface IProps {
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

export const StyledButton = styled.button<IProps>`
  width: 100%;
  border-radius: 12px;
  padding: 0.8rem 0;
  margin: 1rem auto;
  background: darkgray;
  color: white;
  border: 2px solid darkgray;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  cursor: not-allowed;

  ${(props) =>
    props.isActive &&
    css`
      background: #f0e2a3;
      color: black;
      cursor: pointer;
    `}
`;

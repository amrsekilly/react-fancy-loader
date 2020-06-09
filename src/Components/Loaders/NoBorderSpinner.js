import styled, { css } from "styled-components";
import "../Styles/animations.css";

export const NoBorderSpinner = styled.div`
  margin: 0;
  background: transparent;
  border-right: 4px solid transparent;
  border-radius: 50%;
  -webkit-animation: 1s spin linear infinite;
  animation: 1s spin linear infinite;

  ${({ size = 75, color = "#009688", stroke = 4 }) =>
    css`
      width: ${size}px;
      height: ${size}px;
      border-top: ${stroke}px solid ${color};
    `};
`;

import styled, { css } from "styled-components";
import { Spinner } from "../Styles/Spinner";

export const NoBorderSpinner = styled(Spinner)`
  margin: 0;
  background: transparent;
  border-right: 4px solid transparent;
  border-radius: 50%;

  ${({ size = 75, color = "#009688", stroke = 4, duration = 1000 }) =>
    css`
      width: ${size}px;
      height: ${size}px;
      border-top: ${stroke}px solid ${color};
      -webkit-animation: ${duration / 1000}s spin linear infinite;
      animation: ${duration / 1000}s spin linear infinite;
    `};
`;

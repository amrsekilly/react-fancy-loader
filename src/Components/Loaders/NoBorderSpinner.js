import styled, { css } from "styled-components";
import { Spinner } from "../Styles/Spinner";

export const NoBorderSpinner = styled(Spinner)`
  margin: 0 !important;
  background: transparent !important;
  border-right: 4px solid transparent !important;
  border-radius: 50% !important;

  ${({ size = 75, color = "#009688", stroke = 4, duration = 1000 }) =>
    css`
      width: ${size}px !important;
      height: ${size}px !important;
      border-top: ${stroke}px solid ${color} !important;
      -webkit-animation: ${duration / 1000}s spin linear infinite !important;
      animation: ${duration / 1000}s spin linear infinite !important;
    `};
`;

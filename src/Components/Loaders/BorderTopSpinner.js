import styled, { css } from "styled-components";
import { Spinner } from "../Styles/Spinner";

export const BorderTopSpinner = styled(Spinner)`
  &&& {
    border-radius: 50%;
    background-color: transparent;

    ${({
      size = 75,
      color = "#009688",
      stroke = 4,
      outlineColor = "#222",
      duration = 1000,
    }) =>
      css`
        width: ${size}px !important;
        height: ${size}px !important;
        border: ${stroke}px solid ${outlineColor} !important;
        border-top-color: ${color} !important;
        -webkit-animation: ${duration / 1000}s spin linear infinite !important;
        animation: ${duration / 1000}s spin linear infinite !important;
      `};
  }
`;

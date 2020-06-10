import styled, { css } from "styled-components";
import React from "react";
import { Spinner } from "../Styles/Spinner";

const StyledNoBorderSpinner = styled(Spinner)`
  &&& {
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
  }
`;

export const NoBorderSpinner = (props) => (
  <div className="no-border-spinner">
    <div className="no-border-spinner-2">
      <div className="no-border-spinner-3">
        <StyledNoBorderSpinner {...props} />
      </div>
    </div>
  </div>
);

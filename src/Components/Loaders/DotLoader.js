import styled, { css } from "styled-components";
import React from "react";
import { Grow } from "../Styles/Grow";

const FirstDot = styled(Grow)`
  border-radius: 50%;
  position: relative;

  ${({ size = 75, color = "#009688", duration = 1200 }) =>
    css`
      width: ${size}px;
      height: ${size}px;
      background-color: ${color};
      -webkit-animation: ${duration / 1000}s grow ease-in-out infinite;
      animation: ${duration / 1000}s grow ease-in-out infinite;
    `};
`;

const SecondDot = styled(FirstDot)`
  ${({ duration = 1200, size = 75 }) =>
    css`
      margin: 0 ${size / 3}px;
      -webkit-animation: ${duration / 1000}s grow ease-in-out infinite 0.15555s;
      animation: ${duration / 1000}s grow ease-in-out infinite 0.15555s;
    `};
`;

const ThirdDot = styled(FirstDot)`
  ${({ duration = 1200 }) =>
    css`
      -webkit-animation: ${duration / 1000}s grow ease-in-out infinite 0.3s;
      animation: ${duration / 1000}s grow ease-in-out infinite 0.3s;
    `};
`;

export const DotLoader = (props) => (
  <React.Fragment>
    <FirstDot {...props} />
    <SecondDot {...props} />
    <ThirdDot {...props} />
  </React.Fragment>
);

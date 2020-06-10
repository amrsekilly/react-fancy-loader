import styled, { css } from "styled-components";
import React from "react";
import { Grow } from "../Styles/Grow";
import { FlexDiv } from "../Styles/FlexDiv";

const FirstDot = styled(Grow)`
  &&&&&&&&&&&& {
    border-radius: 50% !important;
    position: relative !important;

    ${({ size = 75, color = "#009688", duration = 1200 }) =>
      css`
        width: ${size}px !important;
        height: ${size}px !important;
        background-color: ${color} !important;
        -webkit-animation: ${duration / 1000}s grow ease-in-out infinite !important;
        animation: ${duration / 1000}s grow ease-in-out infinite !important;
      `};
  }
`;

const SecondDot = styled(FirstDot)`
  &&&&&&&&&&&& {
    ${({ duration = 1200, size = 75 }) =>
      css`
        margin: 0 ${size / 3}px !important;
        -webkit-animation: ${duration / 1000}s grow ease-in-out infinite
          0.15555s !important;
        animation: ${duration / 1000}s grow ease-in-out infinite 0.15555s !important;
      `};
  }
`;

const ThirdDot = styled(FirstDot)`
  &&&&&&&&&&&& {
    ${({ duration = 1200 }) =>
      css`
        -webkit-animation: ${duration / 1000}s grow ease-in-out infinite 0.3s !important;
        animation: ${duration / 1000}s grow ease-in-out infinite 0.3s !important;
      `};
  }
`;

export const DotLoader = (props) => (
  <FlexDiv>
    <FirstDot {...props} />
    <SecondDot {...props} />
    <ThirdDot {...props} />
  </FlexDiv>
);

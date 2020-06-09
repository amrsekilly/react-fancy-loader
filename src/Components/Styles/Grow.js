import styled from "styled-components";

export const Grow = styled.div`
  @-webkit-keyframes grow {
    0%,
    40%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes grow {
    0%,
    40%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;

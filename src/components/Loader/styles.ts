import { CircleNotch } from "@phosphor-icons/react";
import styled from "styled-components";
import { Col, Title } from "../../styles/app";

export const SpinnerContainer = styled(Col)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SpinnerConent = styled(Col)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 25vh;
`;

export const InputTitle = styled(Title)`
  margin: 4rem 0 6rem 0;
`;

export const Spinner = styled(CircleNotch)`
  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

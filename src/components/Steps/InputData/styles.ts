import styled from "styled-components";
import { Title, Col } from "../../../styles/app";

export const Container = styled(Col)`
  width: 60vw;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputTitle = styled(Title)`
  margin: 4rem 0 6rem 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 4rem 0 2rem 0;
  }
  @media screen and (max-width: 465px) {
    font-size: 1.2rem;
    padding: 5px;
  }
`;

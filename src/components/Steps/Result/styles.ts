import styled from "styled-components";
import { Col } from "../../../styles/app";

export const Wrapper = styled(Col)`
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 40px;
    background: #f6d167;
    border-radius: 8px;
    margin: 2rem 0;
    font-weight: 700;
    font-size: 1em;
    line-height: 17px;
    color: #ffffff;

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  justify-content: center;
  gap: 2rem;

  h2 {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    svg {
      margin: 0 1rem 0 0;
      fill: #f6d167;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
    align-items: center;
    gap: 0;

    span {
      justify-content: space-evenly;
    }
  }
`;

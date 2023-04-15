import styled from "styled-components";
import { Col, Row, Title } from "../../styles/app";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormRow = styled(Row)`
  align-items: flex-end;

  padding: 0 0 2rem 0;
`;
export const InputRow = styled(Row)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const InputWrapper = styled(Col)`
  margin: 0.5em;
  justify-content: flex-end;

  position: relative;

  input {
    border: 1px solid #c5c6cf;
    border-radius: 8px;
    padding: 10px;

    :focus {
      outline: 1px solid #f6d167;
    }
  }

  p {
    color: red;
    margin: 5px 0;

    position: absolute;
    bottom: -30px;
  }

  button {
    margin: 0 1rem;
    padding: 10px;
    background: #f6d167;
    border-radius: 8px;

    font-weight: 700;
    font-size: 1em;
    line-height: 17px;
    color: #ffffff;

    :nth-child(2) {
      background: #ffffff;
      border: 2px solid #2d3047;
      color: #2d3047;
    }

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0.1em;
    padding: 1rem;
    align-items: center;
    input {
      width: 100%;
    }
  }
`;

export const WallTitle = styled(Title)`
  font-size: 1.5rem;
  margin: 0 1rem 0 0;

  display: flex;
  flex-direction: column;
  flex: 1;
  align-self: center;
`;

export const ButtonRow = styled(Row)`
  justify-content: center;
  position: relative;

  button {
    margin: 2rem 10px;
  }

  p {
    color: black;
    position: absolute;
    bottom: -20px;
  }
`;

import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  border-bottom: 1px solid #e7e7e7;

  display: flex;
  justify-content: start;
  align-items: center;

  img {
    margin: 0 0 0 2rem;
  }

  @media screen and (max-width: 768px) {
    justify-content: center;
    img {
      margin: 0;
    }
  }
`;

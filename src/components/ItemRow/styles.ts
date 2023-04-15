import styled from "styled-components";
import { Row } from "../../styles/app";

export const DisplayItemRow = styled(Row)`
  justify-content: space-evenly;
  align-items: center;
  margin: 0 0 2rem 0;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;

  :nth-child(1) {
    flex: 1;
  }
  :nth-child(2) {
    flex: 4;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    > :first-child {
      flex: 0;
      grid-column: 1 / span 1; /* Set the first column to span one grid track */
      width: 100%; /* Set the width of the first column to 100% */
    }

    button {
      max-width: 100px;
      margin: 0 auto;
    }
  }
`;

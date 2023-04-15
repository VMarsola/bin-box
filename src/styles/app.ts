import styled from "styled-components";

interface GridProps {
  flex?: string;
  margin?: string;
}

export const Row = styled.div<GridProps>`
  display: flex;
  flex-direction: row;
  flex: ${(props) => props.flex};
  margin: ${(props) => props.margin};
`;
export const Col = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => props.flex};
  margin: ${(props) => props.margin};
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin: 4rem 0 2rem 0;
  }
  @media screen and (max-width: 465px) {
    font-size: 1.2rem;
    padding: 5px;
  }
`;
export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;

  @media screen and (max-width: 465px) {
    font-size: 1.2rem;
    padding: 5px;
  }
`;

export const Text = styled.p`
  color: black;
  font-weight: 400;
  font-size: 1rem;
  word-break: break-all;
  text-align: center;
`;
export const TextWrapper = styled.div`
  margin: 2rem;

  @media (max-width: 720px) {
    margin: 5px;
  }
`;

export const ButtonPrimary = styled.button`
  padding: 10px 40px;
  background: #470063;
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
`;

export const ButtonSecondary = styled.button`
  padding: 10px 40px;
  background: #ffff;
  border-radius: 8px;
  margin: 2rem 0;
  font-weight: 700;
  font-size: 1em;
  line-height: 17px;
  color: #2d3047;
  border: 2px solid #2d3047;

  :hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

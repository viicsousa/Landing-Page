import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
  height: 4rem;
  margin-top: 2rem;
  @media (max-width: 920px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 0.7rem;
  }

  div {
    transition: transform 0.3s ease;
    cursor: pointer;
    :hover {
      transform: scale(1.2);
    }
  }
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  background-color: #684e92;
  width: 100%;
  height: 12rem;
  margin-bottom: 16rem;

  @media (max-width: 920px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 0.7rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLogo = styled.text`
  font-weight: bold;
  font-size: 14px;
  color: #34495c;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  div {
    cursor: pointer;
    display: none;
    @media (max-width: 550px) {
      display: flex;
    }
  }
`;

export const NavRouters = styled.text`
  color: #34495c;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  @media (max-width: 550px) {
    display: none;
  }
  :hover {
    opacity: 0.6;
  }
`;

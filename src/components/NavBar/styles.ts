import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 1rem 5rem;
  align-items: center;
  background-color: #66CDAA;
  width: 100%;
  height: 3rem;
  @media (max-width: 920px) {
    padding: 1rem 3rem;
  }
  @media (max-width: 650px) {
    padding: 1rem 1rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 0.7rem;
  }
`
;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleLogo = styled.text`
  font-weight: bold;
  font-size: 16px;
  color: #34495C;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  div{
    cursor: pointer;
    display: none;
    @media (max-width:550px) {
      display: flex;
    }
  }
`;

export const NavRouters = styled.text`
  color: #34495C;
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

export const ModalHamburger = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #66CDAA;
  padding: 1rem; 
  width: 8rem;
  top: 3rem;
  right: 0;
`;

export const ContainerHamburger = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const NavHamburger = styled.div`
  color: #34495C;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
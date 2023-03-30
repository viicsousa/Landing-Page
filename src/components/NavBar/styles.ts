import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  align-items: center;
  background-color: #66CDAA;
  width: 100%;
  height: 3rem;
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
`;

export const NavRouters = styled.text`
  color: #34495C;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
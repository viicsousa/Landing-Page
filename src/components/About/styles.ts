import styled from "styled-components";

export const Structure = styled.div`
  position: relative;
`;

export const ContainerAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1rem;
  height: 30rem;
  
  #imgpingu {
    height: 15rem;
    width: 15rem;
  }
  #imgback {
    opacity: 0.6;
    z-index: -1;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 40rem;
  }
`;

export const TextAbout = styled.div`
  text-align: justify;
  width: 30rem;
  color: #34495C;
  font-size: 14px;
  font-weight: 600;
  border: 10px groove #34495C;
  padding: 1rem;
  background: #66CDAA;
`;
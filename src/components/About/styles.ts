import styled from "styled-components";

export const Structure = styled.div`
  position: relative;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 1rem;
  height: 35rem;
  background-color: rgba(0, 0, 0, 0.4);
  
  #imgpingu {
    height: 15rem;
    width: 15rem;
  }
  #imgback {
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    justify-content: center;
    width: 100%;
    height: 35rem;
  }`;
export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

`;

export const TitleContainer = styled.div`
  font-weight:900;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: #34495C;
  font-size: 3.5em; 
  color: #66CDAA;
`;

export const TextAbout = styled.div`
  text-align: justify;
  width: 30rem;
  color: #34495C;
  font-size: 14px;
  font-weight: 600;
  border: 7px double #34495C;
  padding: 1rem;
  background: #66CDAA;
`;

export const TypeCoach = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Coachs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 15rem;
  color: #34495C;
  font-size: 14px;
  border: 7px double #34495C;
  border-radius:30px;
  padding: 0.5rem;
  background: #66CDAA;
`;

export const TitleCoach = styled.div`
  font-weight: 600;
  text-align: center;
`;

export const TextCoach = styled.div`
  text-align: justify;
`;

export const Value = styled.div`
  font-weight: 600;
  text-align: center;
`;


export const Form = styled.div`
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 1rem;
  border-radius: 8px; 
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Title = styled.form`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #34495C;
`;
export const Information =styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label``;
export const Input = styled.input``;

export const Select = styled.select``;

export const CoachI = styled.option``;

export const CoachII = styled.option``;

export const CoachIII = styled.option``;

export const Button = styled.button`
  background-color: #66CDAA;
  border: none;
  color: #34495C;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.2rem;
`;
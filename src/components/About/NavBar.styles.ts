import styled from "styled-components";

export const Structure = styled.div`
  position: relative;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(52,73,80,1) 37%, rgba(14,173,207,1) 80%);
  min-height: 110vh;
  #imgback {
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    width: 100%;
    min-height: 100%;
  };

`;
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 4rem 1rem;
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
  `;
  
export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 1103px) {
    padding-botton: 7rem;
  }
`;

export const TitleContainer = styled.div`
  font-weight:900;
  -webkit-text-stroke-width: 1.7px;
  -webkit-text-stroke-color: #34495C;
  font-size: 3.5em; 
  color: #66CDAA;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const TextAbout = styled.div`
  text-align: justify;
  width: 30rem;
  color: #34495C;
  font-size: 14px;
  font-weight: 600;
  border: 7px double #34495C;
  border-radius:8px;
  padding: 1rem;
  background: #66CDAA;
  @media (max-width: 500px) {
    width: 18rem;
    font-size: 13px;
  }
`;

export const TypeCoach = styled.div`
  display: flex;
  flew-wrap: wrap;
  width: 100%;
  gap: 1rem;
  @media (max-width: 775px) {
    flex-direction: column;
    align-items: center;
  }
  
`;

export const Coachs = styled.div`
  display: flex;
  flew-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 15rem;
  color: #34495C;
  font-size: 14px;
  border: 7px double #34495C;
  border-radius:8px;
  padding: 0.5rem;
  background: #66CDAA;
  @media (max-width: 500px) {
    width: 12rem;
    font-size: 12px;
  };
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
  margin-top: 3rem;
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
export const Label = styled.label`
  color: #34495C;
`;
export const Input = styled.input`
  background: #FFFFFF;
  .hover {
    color: red;
    }
  ::focus{
    outline: none;
    }
    ::placeholder {
      font-size: 14px;
      color: #CDCDCD;
    }
`;

export const Select = styled.select`
font-size: 14px;
background: #FFFFFF;
  .hover {
    color: red;
  }
  :focus{
    outline: none;
  }

  
`;

export const CoachI = styled.option`
  font-size: 14px;
  background: #FFFFFF;
`;

export const CoachII = styled.option`
  font-size: 14px;
  background: #FFFFFF;
`;

export const CoachIII = styled.option`
  font-size: 14px;
  background: #FFFFFF;
`;

export const Button = styled.button`
  background-color: #66CDAA;
  border: none;
  color: #34495C;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.2rem;
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 15px;
  padding: 1rem;
  background: #FFFFFF;
  color: red;
  animation-duration: 0.2s;
  animation-name: slidein;
  gap: 0.5rem;
  transform: translateX(0);
  border: 2px solid red;

  @keyframes slidein {
    from {
      width: 0%;
    }
    to {
      width: 10rem;
    }
    
  }
`;
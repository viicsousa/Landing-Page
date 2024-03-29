import styled from "styled-components";

export const Structure = styled.div`
background: #e2daf2;
  
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem 5rem;
  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 30rem;
  @media (max-width: 1103px) {
    padding-botton: 7rem;
  }
`;

export const TitleContainer = styled.div`
  font-weight: 900;
  font-size: 3.5em;
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;

export const TextAbout = styled.div`
  text-align: justify;
  width: 30rem;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  padding: 1rem;
  @media (max-width: 600px) {
    width: 18rem;
    font-size: 13px;
  }
`;

export const TypeCoach = styled.div`
  display: flex;
  flew-wrap: wrap;
  flex-direction: column;
  align-self: center;
  margin: 0rem 1rem;
  gap: 1rem;
  @media (max-width: 775px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Coachs = styled.div`
  display: flex;
  flex-direction: column;
  
  font-weight: 600;
  @media (max-width: 500px) {
    width: 12rem;
    font-size: 12px;
  } ;
`;

export const TitleCoach = styled.div`
  font-weight: 600;
  text-align: center;
  font-size: 22px;
  color: #684e92;
`;

export const TextCoach = styled.div`
  text-align: center;
  flex-direction: row;
  color: #000000
  font-size: 14px;
  wight: 20rem;
  padding: 0.5rem 1rem; 
`;

export const Value = styled.div`
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.div`
  background: #684e92;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
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
  font-size: 28px;
  font-weight: 600;
  color: #ffffff;
`;
export const Information = styled.div`
  display: flex;
  flex-direction: column;
  #Select {
    color: red;
  }
`;
export const Label = styled.label`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;

`;
export const Input = styled.input`
  background: #ffffff;
  border: none;
  .hover {
    color: red;
  }
  ::focus {
    outline: none;
  }
  ::placeholder {
    padding: 1.5rem 0 ;
    font-size: 14px;
    color: #cdcdcd;
  }
`;




export const Button = styled.button`
  background-color: #ffffff;
  border: none;
  color: #684e92;
  font-weight: 600;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 0.2rem;
`;

export const Alert = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 25px;
  right: 15px;
  padding: 1rem;
  background: #ffffff;
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

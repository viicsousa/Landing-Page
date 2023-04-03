import { useState, useRef } from "react";

import Image from "next/image";

import {
  Structure,
  Container,
  ContainerAbout,
  TitleContainer,
  TextAbout,
  TypeCoach,
  Coachs,
  TitleCoach,
  TextCoach,
  Value,
  Form,
  ContainerForm,
  Title,
  Information,
  Label,
  Select,
  Input,
  CoachI,
  CoachII,
  CoachIII,
  Button,
} from "./styles";

import TFTbackground from "../../assets/img/png/tftback.png";

import {Warning} from "../../function/ToastWarning/index";
import Email from "../../validations/Email/index";

export default function About() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [getStep, setStep] = useState(0);
  const [getName, setName ] = useState<string>("");
  const [getEmail, setEmail ] = useState<string>("");
  function validateName(){
    if(nameInputRef.current!.value === ""){
      Warning("Preencha o nome", 2500)
    } else {
      setName(nameInputRef.current!.value);
      setStep((currPage) => currPage + 1);
    }
  }

  function validateEmail(){
    if(emailInputRef.current!.value === ""){
      Warning("Preencha o email", 2500)
    } else if(Email.TextoValido(emailInputRef.current!.value) === false){
      Warning("Email inválido", 2500)
    } else {
      setStep((currPage) => currPage + 1);
      setEmail(emailInputRef.current!.value);
    }
  }
  return (
    <Structure>
      <Container>
        <Image src={TFTbackground} alt="" id="imgback" />
        <ContainerAbout>
        <TitleContainer>Coachs TFT</TitleContainer>
          <TextAbout>
            Olá, me chamo Victória Vasconcelos. Jogo TFT desde o set 3.5 e
            comecei a levar mais a sério no set 4. Já cheguei na final de alguns
            campeonatos da comunidade e peguei challenger em todos os sets desde
            o 4. No momento estou dedicando meu tempo para coachs para passar um
            pouco do conhecimento que adquiri durante esse tempo.
          </TextAbout>
          <TypeCoach>
            <Coachs>
              <TitleCoach>Coach I:</TitleCoach>
              <TextCoach>
                Explico sobre o early, mid e late game do jogo. Atualizo do meta.
              </TextCoach>
              <Value>R$ 50,00</Value>
            </Coachs>
            <Coachs>
              <TitleCoach> Coach II:</TitleCoach>
              <TextCoach>Analiso dois jogos ao vivo ou gravados.</TextCoach>
              <Value>R$ 50,00</Value>
            </Coachs>
            <Coachs>
              <TitleCoach>Coach III:</TitleCoach>
              <TextCoach>Combo do Coach I e Coach II.</TextCoach>
              <Value>R$ 90,00</Value>
            </Coachs>
          </TypeCoach>
        </ContainerAbout>
        <Form>
          <ContainerForm>
            <Title>Formulário</Title>
            <Information>
              <Label htmlFor="name">Nome:</Label>
              <Input ref={nameInputRef} id="name" placeholder="Digite seu nome" type="text"></Input>
            </Information>
            <Information>
              <Label htmlFor="nickname">Nickname:</Label>
              <Input  id="nickname" placeholder="Digite seu nickname" ></Input>
            </Information>
            <Information>
              <Label htmlFor="email">Email:</Label>
              <Input ref={emailInputRef} id="email" placeholder="Digite seu email" type="email"></Input>
            </Information>
            <Information>
              <Label htmlFor="discord">Discord:</Label>
              <Input id="nickname" placeholder="Digite seu discord" type="text"></Input>
            </Information>
            <Information>
              <Label htmlFor="coach" >Escolha o Coach:</Label>
              <Select id="coach">
                <CoachI> Coach I</CoachI>
                <CoachII>Coach II</CoachII>
                <CoachIII>CoachIII</CoachIII>
              </Select>
            </Information>
            <Button>Enviar formulário</Button>
          </ContainerForm>
        </Form>
      </Container>
    </Structure>
  );
}

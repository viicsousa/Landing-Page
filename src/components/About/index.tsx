import { useState, useEffect } from "react";
import Image from "next/image";
import React from 'react'
import Select from 'react-select';

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
  Input,

  Button,
 
} from "./NavBar.styles";



import * as Toast from "../../function/ToastWarning/index";

export default function About() {
  const [nome, setNome] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [discord, Setdiscord] = useState("");
  const [expandedCoachI, setExpandedCoachI] = useState(false);
  const [expandedCoachII, setExpandedCoachII] = useState(false);
  const [expandedCoachIII, setExpandedCoachIII] = useState(false);

  const handleCoachExpand = (coachType: string) => {
    if (coachType === "I") {
      setExpandedCoachI(!expandedCoachI);
    } else if (coachType === "II") {
      setExpandedCoachII(!expandedCoachII);
    } else if (coachType === "III") {
      setExpandedCoachIII(!expandedCoachIII);
    }
  };

  async function ValidateInputs() {
    if (nome === "") {
      Toast.Warning("Preencha o Nome", 2500);
      return false;
    } else if (nickname === "") {
      Toast.Warning("Preencha o Nickname", 2500);
      return false;
    } else if (email === "") {
      Toast.Warning("Preencha o Email", 2500);
      return false;
    } else if (discord === "") {
      Toast.Warning("Preencha o Discord", 2500);
      return false;
    }
  
    return true;
  }
  

  const options = [
    { value: 'coachi', label: 'Coach I' },
    { value: 'coachii', label: 'Coach II' },
    { value: 'coachiii', label: 'Coach III' }
  ]
  


  return (
    <Structure>
      <Container>
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
          <TitleCoach onClick={() => handleCoachExpand("I")}>Coach I   {expandedCoachI ? "-" : "+"}</TitleCoach>
          {expandedCoachI && <TextCoach>Explico sobre o early, mid e late game do jogo. Atualizo do meta. <Value>R$ 50,00</Value></TextCoach>}
          
        </Coachs>
        <Coachs>
          <TitleCoach onClick={() => handleCoachExpand("II")}>Coach II   {expandedCoachII ? "-" : "+"}</TitleCoach>
          {expandedCoachII && <TextCoach>Analiso dois jogos ao vivo ou gravados. <Value>R$ 50,00</Value></TextCoach>}
          
        </Coachs>
        <Coachs>
          <TitleCoach onClick={() => handleCoachExpand("III")}>Coach III   {expandedCoachIII ? "-" : "+"}</TitleCoach>
          {expandedCoachIII && <TextCoach>Combo do Coach I e Coach II.  <Value>R$ 90,00</Value></TextCoach>}
         
        </Coachs>
      </TypeCoach>
        </ContainerAbout>
        <Form>
          <ContainerForm>
            <Title>Formulário</Title>
            <Information>
              <Label htmlFor="name">Nome:</Label>
              <Input
                id="name"
                placeholder="Digite seu nome"
                type="text"
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              ></Input>
            </Information>
            <Information>
              <Label htmlFor="nickname">Nickname:</Label>
              <Input
                id="nickname"
                placeholder="Digite seu nickname"
                onChange={(e) => setNickname(e.target.value)}
              ></Input>
            </Information>
            <Information>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                placeholder="Digite seu email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              ></Input>
            </Information>
            <Information>
              <Label htmlFor="discord">Discord:</Label>
              <Input
                id="discord"
                placeholder="Digite seu discord"
                type="text"
                onChange={(e) => Setdiscord(e.target.value)}
              ></Input>
            </Information>
            <Information>
              <Label htmlFor="coach">Escolha o Coach:</Label>
              <Select options={options} />
            </Information>
            
        <Button onClick={async () => {
  const isValid = await ValidateInputs();
  if (isValid) {
    // Lógica para enviar o formulário
    console.log("Formulário válido. Enviar dados.");
  }
}}>Enviar formulário</Button>
          </ContainerForm>
        </Form>

      </Container>
    </Structure>
  );
}

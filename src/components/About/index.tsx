import Image from "next/image";

import {Structure, ContainerAbout, TextAbout} from "./styles";

import Pingu from "../../assets/img/png/pingutft.png";
import TFTbackground from "../../assets/img/png/tftback.png";

export default function About () {
  return (
    <Structure>
      <ContainerAbout>
      <Image src={TFTbackground} alt="" id="imgback"/>
      <TextAbout>Olá, me chamo Victória Vasconcelos. Jogo tft desde o set 3.5 e comecei a levar mais a sério no set 4. Já cheguei na final de alguns campeonatos da comuindade e peguei challenger em todos os sets desde o 4. No momento estou dedicando meu tempo para coachs para passar um pouco do conhecimento que adquiri durante esse tempo. </TextAbout>
    </ContainerAbout>
    </Structure>
  )
}
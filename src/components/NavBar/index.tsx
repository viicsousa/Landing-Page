import { useState, useCallback } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

import { Container, Logo } from "./NavBar.styles";

import Hamburguer from "../../assets/img/svg/hamburguer.svg";
import Close from "../../assets/img/svg/close.svg";
import tft from "../../assets/img/png/tft-remix-rumble-key-art-1920x1080.webp"
import tftII from "../../assets/img/png/tft_set_10_novidades__s7lzn0.webp"
import GameControllers from "../../assets/animations/game-controller.json";

export default function NavBar() {
  return (
    <Container>
      <Logo>
        <Image src={tft} alt="" />
  
      </Logo>
    </Container>
  );
}

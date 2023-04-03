import { useState, useCallback } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';


import { Container, Logo, TitleLogo, Nav, NavRouters} from './styles';

import Hamburguer from "../../assets/img/svg/hamburguer.svg";
import Close from "../../assets/img/svg/close.svg";

import GameControllers from "../../assets/animations/game-controller.json";

export default function NavBar ( ) {

  
  return (
    <Container>
      <Logo>
      
        <TitleLogo>TFTeacher</TitleLogo>
      </Logo>
    </Container>
  )
}
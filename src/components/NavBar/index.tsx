import { useState, useCallback } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Lottie from 'react-lottie';

import { Container, Logo, TitleLogo, Nav, NavRouters} from './styles';

import Hamburguer from "../../assets/img/svg/hamburguer.svg";
import Close from "../../assets/img/svg/close.svg";

import GameControllers from "../../assets/animations/game-controller.json";

export default function NavBar ( ) {

  const defaultOptionsGameControllersAnimation = {
    loop: false,
    autoplay: true, 
    animationData: GameControllers,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };
  return (
    <Container>
      <Logo>
      <Lottie 
        options={defaultOptionsGameControllersAnimation}
        height={40}
        width={40}
        isStopped={false}
        /> 
        <TitleLogo>TFTeacher</TitleLogo>
      </Logo>
    </Container>
  )
}
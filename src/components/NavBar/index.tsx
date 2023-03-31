import { useState, useCallback } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';
import Lottie from 'react-lottie';

import { Container, Logo, TitleLogo, Nav, NavRouters, ModalHamburger, ContainerHamburger, NavHamburger } from './styles';

import Hamburguer from "../../assets/img/svg/hamburguer.svg";
import Close from "../../assets/img/svg/close.svg";

import GameControllers from "../../assets/animations/game-controller.json";

export default function NavBar ( ) {

  const router = useRouter();
  const [getHamburger, setHamburger] = useState(false);

  const openHamburger = useCallback(() => {
    setHamburger(true);
  }, []);

  const closeHamburger = useCallback(() => {
    setHamburger(false);
  }, []);

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
        height={60}
        width={60}
        isStopped={false}
        /> 
        <TitleLogo>TFTeacher</TitleLogo>
      </Logo>
      <Nav>
        <NavRouters>Sobre</NavRouters>
        <NavRouters>Coach</NavRouters>
        <NavRouters>Contato</NavRouters>
        <div onClick={() => setHamburger(!getHamburger)}>
        {getHamburger ? (<Image src={Close} alt="" height="20" width="20"/>) : (<Image src={Hamburguer} alt="" height="20" width="20"/> ) }
      </div>
      </Nav>
      {getHamburger && (
        <ModalHamburger>
          <ContainerHamburger>
            <NavHamburger>Sobre</NavHamburger>
            <NavHamburger>Coach</NavHamburger>
            <NavHamburger>Contato</NavHamburger>
          </ContainerHamburger>
        </ModalHamburger>
      )}
    </Container>
  )
}
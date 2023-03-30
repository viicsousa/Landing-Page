import Lottie from 'react-lottie';

import { Container, Logo, TitleLogo, Nav, NavRouters } from './styles';

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
      </Nav>
    </Container>
  )
}
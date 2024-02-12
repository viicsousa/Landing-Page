import Image from "next/image";

import { Container } from "./Fotter.styles"

import Discord from "../../assets/img/png/2111370.png"

export default function Fotter() {
  return (
    <>
     <Container>
    <div><Image src={Discord} alt="" width={30}/></div>
     </Container>
    
    </>
  );
}
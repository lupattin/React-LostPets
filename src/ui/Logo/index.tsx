import React from "react";
import Image from 'react-bootstrap/Image'
import Container from "react-bootstrap/Container";
import img from "../../img/logo.png";

function Logo() {
    return (
      <Container style={{width: "243px", display:"flex", alignItems:"center", margin: 0 }}>
        <Image src={img} style={{width:"100px", height:"100px"}} ></Image>
        <h1 style={{fontFamily:"Austie Bost Kitten Klub"}}>LostPets</h1>
      </Container>
    );
  }
  
  export { Logo };
import React from "react";
import { ButtonHome } from "../ui/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { ButtonOptions } from "../ui/Button";
import { FormChangePetData } from "../ui/Form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import {
  offcanvasMyDataState,
  offcanvasReportPetState,
  offcanvasMyReportedPetsState,
  userState,
  offcanvasFoundPet,
  userNameState
} from "../atoms";
import { OffcanvasFoundPet } from "./Offcanvas";
import { CustomToggle } from "../ui/CustomToggle";

function CardComponent({ name, direction, image }) {
  const changeFoundPet = useSetRecoilState(offcanvasFoundPet);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign:"center"
        }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Text>{direction}</Card.Text>
        <OffcanvasFoundPet close={()=>{changeFoundPet(false)}} ></OffcanvasFoundPet>
        <ButtonHome click={()=>{changeFoundPet(true)}}>¡Lo encontre!</ButtonHome>
      </Card.Body>
    </Card>
  );
}
function CardMyPetsComponent({ name, direction, level, image, city, petId}) {
  
  
  return (
    <Accordion style={{marginBottom:"20px"}} defaultActiveKey={""}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card.Title>{name}</Card.Title>
          <Card.Text>{direction + " " + level}</Card.Text>
          <CustomToggle eventKey={"0"}>Modificar Datos</CustomToggle>
        </Card.Body>
        <Accordion.Collapse eventKey="0">
          <FormChangePetData petId={petId} name={name} direction={direction} level={level} city={city}></FormChangePetData>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

function CardOptions() {
  const userName = useRecoilValue(userNameState) as any;
  const changeMyDataState = useSetRecoilState(offcanvasMyDataState);
  const changeReportPetState = useSetRecoilState(offcanvasReportPetState);
  const changeMyReportedPetsState = useSetRecoilState(
    offcanvasMyReportedPetsState
  );
  return (
    <div className="petsPage_card_container">
      <Card style={{ width: "18rem" }}>
        <Card.Body style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "space-evenly"}}>
          <h1 >hola {userName.name}</h1>
          <Card.Title>Opciones</Card.Title>
          <div style={{display: "flex",flexDirection: "column",alignItems: "center", justifyContent:"center", height:"387px"}}>
            <ButtonOptions click={() => {changeMyDataState(true)}} style={{ width: "75%", marginBottom:"10px"}} size="lg" >
              Mis Datos
            </ButtonOptions>
            <ButtonOptions click={() => { changeReportPetState(true)}} style={{ width: "75%", marginBottom:"10px"}} size="lg">
              Reportar Mascotas
            </ButtonOptions>
            <ButtonOptions click={() => {changeMyReportedPetsState(true)}} style={{ width: "75%", marginBottom:"10px"}} size="lg">
              Mis Mascotas Reportadas
            </ButtonOptions>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export { CardComponent, CardOptions, CardMyPetsComponent };

import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import {FormSignIn, FormSignUp, FormFoundPet} from "../ui/Form"
import { MyData } from "./MyData";
import { PetsReported } from "./PetsReported";
import { ReportPet } from "./ReportPet";
import { useRecoilValue } from "recoil";
import { offcanvasSignInState, offcanvasSignUpState, offcanvasMyDataState, offcanvasReportPetState, offcanvasMyReportedPetsState, offcanvasFoundPet, cardData, petsFound } from "../atoms";
import { searchPetsByUser } from "../hooks"

type OffcanvasType = {
  close: () => any;
};
function OffcanvasSignIn({ close }: OffcanvasType) {
  
  const stateOffcanvas = useRecoilValue(offcanvasSignInState)
  return (
    
    
      <Offcanvas style={{width:"40%", margin:"auto", height:"350px", minWidth:"290px"}} placement="top" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Iniciar Sesíon</h1>
          <FormSignIn></FormSignIn>
        </Offcanvas.Body>
      </Offcanvas>
    
  );
}
function OffcanvasSignUp ({ close }: OffcanvasType) {

  const stateOffcanvas = useRecoilValue(offcanvasSignUpState)
  return (
    <>
      <Offcanvas style={{width:"40%", margin:"auto", height:"350px", minWidth:"290px"}} placement="top" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Registrarse</h1>
          <FormSignUp></FormSignUp>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function OffcanvasUserData ({ close }: OffcanvasType) {

  const stateOffcanvas = useRecoilValue(offcanvasMyDataState)
  return (
    <>
      <Offcanvas placement="end" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{display:"flex", flexDirection:"column", justifyContent:"center", marginBottom:"100px"}}>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Mis datos</h1>
           <p>En estas sección, puedes ver y modificar tus datos.</p>
          <MyData></MyData>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function OffcanvasReportPet ({ close }: OffcanvasType) {

  const stateOffcanvas = useRecoilValue(offcanvasReportPetState)
  return (
    <>
      <Offcanvas placement="end" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Reportar Mascota</h1>
           <ReportPet></ReportPet>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
function OffcanvasMyReportedPets ({ close }: OffcanvasType) {
  /* const results = searchPetsByUser() */
  
  
  const stateOffcanvas = useRecoilValue(offcanvasMyReportedPetsState)
  return (
    <>
      <Offcanvas placement="end" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ display: "flex", flexDirection: "column", alignItems:"center"}}>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Mis Mascotas Reportadas</h1>
            <PetsReported></PetsReported>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function OffcanvasFoundPet({ close }: OffcanvasType) {
   const petData = useRecoilValue(cardData)
   
   
  const stateOffcanvas = useRecoilValue(offcanvasFoundPet)
  return (
    <>
      <Offcanvas style={{width:"40%", margin:"auto", height:"350px", minWidth:"290px"}} placement="top" show={stateOffcanvas} onHide={close}>
        <Offcanvas.Header  closeButton>
          <Offcanvas.Title ></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <h1 style={{fontSize:"25px", textAlign:"center"}}>Enviaremos tus datos al dueño de la mascota.</h1>
          <FormFoundPet petName={petData.name} userID={petData.userOwnerID}></FormFoundPet>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export { OffcanvasSignIn, OffcanvasSignUp, OffcanvasUserData, OffcanvasReportPet, OffcanvasMyReportedPets, OffcanvasFoundPet };

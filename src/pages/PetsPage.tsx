import React, {useEffect, useState} from "react";
import { MapBox } from "../components/Mapbox";
import { CardComponent, CardOptions } from "../components/Card";
import { OffcanvasUserData, OffcanvasReportPet, OffcanvasMyReportedPets } from "../components/Offcanvas";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cardData, offcanvasMyDataState, offcanvasReportPetState, offcanvasMyReportedPetsState, userState, userNameState, petsFound, ubicationState, checkUbication} from "../atoms";
import "./petsPage.css"


function PetsPage() { 

    
  const data = useRecoilValue(cardData)
  const changeMyDataState = useSetRecoilState(offcanvasMyDataState)
  const changeReportPetState = useSetRecoilState(offcanvasReportPetState)
  const changeMyReportedPetsState = useSetRecoilState(offcanvasMyReportedPetsState)
  
 
  return (
    <div className="petsPage_container" style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
      <h1 className="petsPage_card_title" style={{fontFamily: "Austie Bost Kitten Klub", margin: "60px", textAlign:"center", fontSize:"48px"}}>Mapa de mascotas perdidas según tu ubicación</h1>
      <p style={{fontSize:"20px", marginBottom:"24px", textAlign:"center"}}>Haz click en los marcadores del mapa para verificarla informacion de la mascota reportada.</p>
      <div className="petsPage_container" style={{display:"flex", flexDirection:"column", width:"100vw"}}>
        <div className="petsPage_container" style={{display:"flex" , width:"100vw", justifyContent:"center"}}>
        <CardComponent name={data.name} direction={data.direction} image={data.image}></CardComponent>
        <MapBox></MapBox>
        <CardOptions></CardOptions>

        <OffcanvasUserData close={()=>{changeMyDataState(false)}}></OffcanvasUserData>
        <OffcanvasReportPet close={()=>{changeReportPetState(false)}}></OffcanvasReportPet>
        <OffcanvasMyReportedPets close={()=>{changeMyReportedPetsState(false)}}></OffcanvasMyReportedPets>
        </div>
      </div>
    </div>
  );
}

export { PetsPage };

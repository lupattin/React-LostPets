import React, { useEffect } from "react";
import { Slider } from "../ui/Slider/index";
import { ButtonHome } from "../ui/Button";
import { OffcanvasSignIn, OffcanvasSignUp } from "../components/Offcanvas";
import { useSetRecoilState } from "recoil";
import { offcanvasSignInState, offcanvasSignUpState, userState, userNameState, petsFound, ubicationState, checkUbication } from "../atoms";
import { getUbication } from "../hooks";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  const setUserData = useSetRecoilState(userState)
  const setUserName = useSetRecoilState(userNameState)
  const setPetsFound = useSetRecoilState(petsFound)
  const setCrd = useSetRecoilState(ubicationState);
  
  useEffect(()=>{
    if(localStorage.getItem("data")){

      const localstorageUserData = localStorage.getItem("data") as any
      const localstorageUserPets = localStorage.getItem("userPets") as any
      const localstorageUserCoords = JSON.parse(localStorage.getItem("coords")) as any
    
      setUserData(JSON.parse(localstorageUserData))
      setUserName({name: JSON.parse(localstorageUserData).user.name})
      setPetsFound(JSON.parse(localstorageUserPets))
      setCrd({latitude:localstorageUserCoords.lat, longitude:localstorageUserCoords.lon})
      navigate("PetsPage", { replace: true })
    }

  })

  getUbication()
  const changeSignInState = useSetRecoilState(offcanvasSignInState)
  const changeSignUpState = useSetRecoilState(offcanvasSignUpState)
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign:"center" }}>

      <h1 style={{ fontFamily: "Austie Bost Kitten Klub", fontSize: "50px", margin: "50px"}}>  Bienvenidos a LostPets</h1>

      <p style={{ fontSize: "20px" }}>La página para encontrarte con tu mascota.</p>

      <p style={{ fontSize: "20px" }}>Para comenzar, te pedimos que nos compartas tu ubicación para poder ubicar tus mascotas.</p>

        <div style={{display: "flex", justifyContent: "space-between", width: "300px", margin: "30px"}}>

          <ButtonHome click={()=>{ changeSignInState(true) }}>Iniciar Sesión</ButtonHome>

          <ButtonHome click={()=>{changeSignUpState(true) }}>Registrarse</ButtonHome>
        
          <OffcanvasSignIn close={()=>{changeSignInState(false)}}></OffcanvasSignIn>
          <OffcanvasSignUp close={()=>{changeSignUpState(false)}}></OffcanvasSignUp>

        </div>
      <div style={{width:"100vw"}}>
        <Slider></Slider>
      </div>
      
    </div>
  );
}

export { Home };

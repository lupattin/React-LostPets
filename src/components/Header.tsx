import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "../ui/Logo";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { offcanvasSignInState, offcanvasSignUpState ,offcanvasMyDataState, offcanvasReportPetState, offcanvasMyReportedPetsState} from "../atoms";

function Header() {
  const path = window.location.pathname
  
  
  const changeSignInState =  useSetRecoilState(offcanvasSignInState)
  const changeSignUpState =  useSetRecoilState(offcanvasSignUpState)
  const changeoffcanvasMyDataState =  useSetRecoilState(offcanvasMyDataState)
  const changeoffcanvasReportPetState =  useSetRecoilState(offcanvasReportPetState)
  const changeoffcanvasMyReportedPetsState =  useSetRecoilState(offcanvasMyReportedPetsState)
  const navigate = useNavigate();
  /* Create this functions because the href reload the entire page so I use de onClick to change de path */
  function clickToHome() {
    localStorage.removeItem("data")
    localStorage.removeItem("userPets")
    localStorage.removeItem("coords")
    localStorage.removeItem("recoil-persist")
    navigate("/", { replace: true });
  }
  function SignUP() {
    changeSignUpState(true)
  }
  function SignIn() {
    changeSignInState(true)
  }
  function clickOffcanvasMyDataState() {
    changeoffcanvasMyDataState(true)
  }
  function clickOffcanvasReportPetState() {
    changeoffcanvasReportPetState(true)
  }
  function clickOffcanvasMyReportedPetsState() {
    changeoffcanvasMyReportedPetsState(true)
  }

  const links = ()=>{
     if(path == "/"){
       return(
         <Nav style={{ marginRight: "70px" }} className="justify-content-end ">
                 <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={clickToHome}>
                   Inicio
                 </Nav.Link>
                 <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={SignUP}>
                   Registrarse
                 </Nav.Link>
                 <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={SignIn}>
                   Iniciar Sesión
                 </Nav.Link>
               </Nav>
       )
     }else if(path== "/PetsPage"){
      return(
        <Nav style={{ marginRight: "70px" }} className="justify-content-end ">
                <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={clickToHome}>
                  Cerrar Sesion
                </Nav.Link>
                <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={clickOffcanvasMyDataState}>
                  Mis Datos
                </Nav.Link>
                <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={clickOffcanvasReportPetState}>
                  Reportar
                </Nav.Link>
                <Nav.Link style={{ fontSize: "20px", marginRight:"30px"}} onClick={clickOffcanvasMyReportedPetsState}>
                  Mis Mascotas
                </Nav.Link>
              </Nav>
      )
     }
  }
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Logo></Logo>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end " id="basic-navbar-nav">
            {links()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export { Header };

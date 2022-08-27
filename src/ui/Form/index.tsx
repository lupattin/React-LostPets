import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { ButtonSubmit, ButtonDelete } from "../Button";
import { fetchUserData, fetchSignUp, fetchUpdatePetData, fetchReportFoundPet, fetchPetsByUser, fetchEliminatePet } from "../../lib/fetch";
import { AlertSignIn, AlertSignInError, AlertCorrectModifed } from "../Alerts";
import { userState, petURLImage, offcanvasSignInState, offcanvasSignUpState, userNameState, petsFound } from "../../atoms";
import { useRecoilValue, useSetRecoilState} from "recoil";
import { MyDropzone } from "../DropZone";

function FormSignIn() {
  const [alertLogin, setAlertLogin] = useState(false);
  const [alertError, setAlertError] = useState(false);

  const setOffcanvasSignInState = useSetRecoilState(offcanvasSignInState)
  const setUserData = useSetRecoilState(userState)
  const setUserName = useSetRecoilState(userNameState)
  const setPetsFound = useSetRecoilState(petsFound)
  
  const navigate = useNavigate()

function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(e.target.email.value, e.target.password.value).then(async (userData) => {
      
      if (userData.Error) {
        setAlertLogin(false);
        setAlertError(true);
        setTimeout(() => {
          setAlertError(false);
        }, 3000);
      } else{
        setUserData({token:userData.token, user: userData.user})  
        setUserName({name:userData.user.name})
        setOffcanvasSignInState(false)
        const pets = await fetchPetsByUser(userData.user.id)
        setPetsFound(pets)
        navigate("PetsPage", { replace: true })
        localStorage.setItem("data", JSON.stringify(userData))
        localStorage.setItem("userPets", JSON.stringify(pets))
      }
    });
  }
  function handleClick() {
    setAlertLogin(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <AlertSignIn show={alertLogin}> Ingresando...</AlertSignIn>
      {" "}
      <AlertSignInError show={alertError}>
        {" "}
        Email o Password incorrectos.
      </AlertSignInError>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="ejemplo@gmail.com"
          name="email"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" name="password" />
      </Form.Group>
      <ButtonSubmit click={handleClick}>Enviar</ButtonSubmit>
    </Form>
  );
}
function FormSignUp() {

  const [alertLogin, setAlertLogin] = useState(false);
  const [alertError, setAlertError] = useState(false);
  
  const setOffcanvasSignUpState = useSetRecoilState(offcanvasSignUpState)
  const setUserData = useSetRecoilState(userState)
  const setUserName = useSetRecoilState(userNameState)
  
  const navigate = useNavigate()
  
  function handleSubmit(e) {
    e.preventDefault();
    fetchSignUp(e.target.name.value, e.target.email.value, e.target.password.value).then((res)=>{
        if(res.created == "false"){
          setAlertLogin(false)
          setAlertError(true)
          setTimeout(() => {
            setAlertError(false);
          }, 3000);
        }else{
          navigate("PetsPage", { replace: true })
          setUserData({token:res.token, user: res.user})
          setUserName({name:res.user.name})
          setOffcanvasSignUpState(false)
        }       
    })
  }

  function handleClick() {
    setAlertLogin(true);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <AlertSignIn show={alertLogin}> Ingresando...</AlertSignIn>
      {" "}
      <AlertSignInError show={alertError}>
        Email ya registrado. 
      </AlertSignInError>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control required type="name" placeholder="Ingresar nombre" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="text" placeholder="ejemplo@gmail.com" name="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" name="password" />
      </Form.Group>
      <ButtonSubmit click={handleClick}>Registrarse</ButtonSubmit>
    </Form>
  );
}

function FormChangePetData({name,direction, level, city, petId}) {
  const [showAlert, setShowAlert] = useState(false)
  const [showDeleteAlert, setShowDeleteAlert] = useState(false)
  const [showDeleteErrorAlert, setShowDeleteErrorAlert] = useState(false)

  const userData = useRecoilValue(userState) as any
  const newPetURLimage = useRecoilValue(petURLImage)

 async function handleSubmit(e){
    e.preventDefault()
    
   const result = await fetchUpdatePetData(petId, e.target.direction.value, e.target.level.value, e.target.city.value, userData.token, e.target.name.value, userData.user.id, newPetURLimage)
   if (result.statusText =="OK") {
    setShowAlert(true)
    setTimeout(()=>{
      setShowAlert(false)
    }, 5000)
   }
  }
  async function eliminatePet() {
    const result = await fetchEliminatePet(petId,userData.token)
    if(result.statusText=="OK"){
      setShowDeleteAlert(true)
      setTimeout(()=>{
        setShowDeleteAlert(false)
      }, 5000)
    }else{
      setShowDeleteErrorAlert(true)
      setTimeout(()=>{
        setShowDeleteErrorAlert(false)
      }, 5000)
    }
    
  }
  return (
    <Form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder={name} name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Dirección</Form.Label>
        <Form.Control type="text" placeholder={direction} name="direction"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Altura</Form.Label>
        <Form.Control type="number" placeholder={level} name="level"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Ciudad</Form.Label>
        <Form.Control type="text" placeholder={city} name="city"/>
      </Form.Group>
      <Form.Label style={{ textAlign: "center", fontSize: "20px" }}>
          Nueva Imagen.
        </Form.Label>
        <MyDropzone></MyDropzone>
        <AlertCorrectModifed show={showAlert}>Modificado Correctamente</AlertCorrectModifed>
        <AlertCorrectModifed show={showDeleteAlert}>Mascota Eliminada Correctamente</AlertCorrectModifed>
        <AlertSignInError show={showDeleteErrorAlert}>Error, intentar mas tarde.</AlertSignInError>
      <ButtonSubmit click={()=>{}}>
        Modificar
      </ButtonSubmit>
      <ButtonDelete style={{marginTop:"20px"}} click={()=>{eliminatePet()}}>
        Eliminar Mascota
      </ButtonDelete>
    </Form>
  );
}

function FormFoundPet({userID, petName}) {
  const [alert, setAlert] = useState(false)
  
  const userData = useRecoilValue(userState) as any
  
  async function handleSubmit(e){
    e.preventDefault()
    const result = await fetchReportFoundPet(userID, userData.token,petName, e.target.name.value, e.target.phone.value, e.target.where.value )
    if (result.statusText == "OK") {
      setAlert(true)
      setInterval(()=>{
        setAlert(false)
      }, 7000)
    }
    
  }
  function handleClick(){}
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tu nombre</Form.Label>
        <Form.Control required type="name"  name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tu Telefono</Form.Label>
        <Form.Control required type="phone"  name="phone"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>¿Donde lo encontraste?</Form.Label>
        <Form.Control required  as="textarea" name="where" />
      </Form.Group>
      {" "}
      <AlertCorrectModifed show={alert}> Datos enviados correctamente, aguarde a que se contacten con usted.</AlertCorrectModifed>
      <ButtonSubmit click={handleClick}>Registrarse</ButtonSubmit>
    </Form>
  );
}

export { FormSignIn, FormSignUp, FormChangePetData, FormFoundPet };

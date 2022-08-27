import React, {useState } from "react";
import Form from "react-bootstrap/Form";
import { MyDropzone } from "../ui/DropZone";
import { MapBoxSearchLocation } from "./Mapbox";
import { ButtonCheck, ButtonSubmit } from "../ui/Button";
import { fetchCheckDirection, fetchReportNewPet, fetchPetsByUser } from "../lib/fetch";
import { userState, petURLImage, checkUbication, petsFound } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { AlertCorrectModifed, AlertSignInError } from "../ui/Alerts";



function ReportPet() {
  
  const [alert, setAlert] = useState(false)
  const [alertError, setAlertError] = useState(false)
  const [result, setResults] = useState([])
  const userData = useRecoilValue(userState) as any
  const image = useRecoilValue(petURLImage)
  const setCheckNewUbication = useSetRecoilState(checkUbication)
  const setPetsFound = useSetRecoilState(petsFound)
  
  
  async function handleCheckDirection() {
    
    const directionEl = document.querySelector(".direction") as any;
    const levelEl = document.querySelector(".level") as any;
    const cityEl = document.querySelector(".city") as any;
    const results = await fetchCheckDirection(directionEl.value,levelEl.value, cityEl.value)
    
    setCheckNewUbication({lat:results[0].lat, lon:results[0].lon})
    
    setResults(results)
    
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
    const directionEl = document.querySelector(".direction") as any;
    const levelEl = document.querySelector(".level") as any;
    const cityEl = document.querySelector(".city") as any;
    const coords = await fetchCheckDirection(directionEl.value,levelEl.value, cityEl.value)
    const result = await fetchReportNewPet(e.target.name.value, e.target.direction.value, e.target.level.value, e.target.city.value, coords[0].lon, coords[0].lat, userData, image)
    if(result.resp == "ok"){
      setAlert(true)
      const resultsPets = await fetchPetsByUser(userData.user.id)
      setPetsFound(resultsPets)
      setInterval(()=>{
        setAlert(false)
      },4000)
    }else{
      setAlertError(true)
      setInterval(()=>{
        setAlertError(false)
      },4000)
    }
    
    
  }
  return (
    <Form className="form" onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required name="name" />
        </Form.Group>
        <Form.Label style={{ textAlign: "center", fontSize: "20px" }}>
          Imagen de la Mascota.
        </Form.Label>
        <MyDropzone></MyDropzone>
        <Form.Label style={{ textAlign: "center", fontSize: "20px" }}>
          Domicilio donde fue encontrada.
        </Form.Label>
        <AlertCorrectModifed show={alert}> Mascota Reportada con éxito. </AlertCorrectModifed>
        <AlertSignInError show={alertError}>Hubo un error, por favor, volver a intentar mas tarde.</AlertSignInError>
          <Form.Group className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control required className="direction" name="direction"/>
          </Form.Group>
          <div style={{ display: "flex" }}>
            <Form.Group className="mb-3" style={{ marginRight: "20px" }}>
              <Form.Label>Altura</Form.Label>
              <Form.Control required className="level" name="level" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Barrio/Ciudad/Localidad</Form.Label>
              <Form.Control required className="city" name="city" />
            </Form.Group>
          </div>
        <MapBoxSearchLocation array={result}></MapBoxSearchLocation>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ButtonCheck  click={() => { handleCheckDirection()}} size={"sm"}>Chequear Domicilio</ButtonCheck>
          <ButtonSubmit  click={() => {handleSubmit}}>Enviar Reporte </ButtonSubmit>
        </div>
      </div>
    </Form>
  );
}

export { ReportPet };

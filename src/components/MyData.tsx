import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { AlertSignInError, AlertSignIn } from "../ui/Alerts";
import { ButtonOptions } from "../ui/Button";
import { userState, userNameState } from "../atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchUpdateUser } from "../lib/fetch";

function MyData() {
  const [alertError, setAlertError] = useState(false);
  const [alertSignIn, setAlertSignIn] = useState(false);
  const userData = useRecoilValue(userState) as any;
  const setUserName = useSetRecoilState(userNameState);
  async function handleSubmit(e) {
    e.preventDefault();

    if (e.target.newpassword.value != e.target.confirmedpassword.value) {
      setAlertError(true);
    } else {
      const results = await fetchUpdateUser(e.target.name.value, e.target.email.value, e.target.newpassword.value, userData.token, userData.user.email);
        
      /* const userDataCopy = { ...userData };
        userDataCopy.user = results[1][0]; */
        
        setUserName({name:results[1][0].name});
        setAlertSignIn(true)
        setInterval(()=>{
          setAlertSignIn(false)
        },3000)
    }
  }
  function handleClick() {
    setInterval(() => {
      setAlertError(false);
      
    }, 3000);
  }
  return (
    <Form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <AlertSignInError show={alertError}>
        Error: Los passwords no son iguales.
      </AlertSignInError>
      <AlertSignIn show={alertSignIn}>
        Datos Modificados correctamente
      </AlertSignIn>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          required
          type="name"
          placeholder={userData.user.name}
          name="name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder={userData.user.email}
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Nuevo Password</Form.Label>
        <Form.Control required type="password" name="newpassword" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Confirmar Password</Form.Label>
        <Form.Control required type="password" name="confirmedpassword" />
      </Form.Group>
      <ButtonOptions click={handleClick} size="lg" style={{ margin: "auto" }}>
        Modificar
      </ButtonOptions>
    </Form>
  );
}

export { MyData };

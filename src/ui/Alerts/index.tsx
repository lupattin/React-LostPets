import React from "react";
import Alert from 'react-bootstrap/Alert';

function AlertSignIn({children ,show}) {
    return (
        <Alert show={show} variant="primary">{children}</Alert>
    );
  }
function AlertSignInError({children ,show}) {
    return (
        <Alert show={show} variant="danger">{children}</Alert>
    );
  }
function AlertCorrectModifed({children ,show}) {
    return (
        <Alert show={show} variant="success">{children}</Alert>
    );
  }

  
  export {AlertSignIn, AlertSignInError, AlertCorrectModifed };
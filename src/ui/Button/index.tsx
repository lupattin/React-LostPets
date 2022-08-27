import React from "react";
import Button from 'react-bootstrap/Button';

function ButtonHome({children, click}) {
    return (
        <Button onClick={click} variant="primary">{children}</Button>
    );
  }
function ButtonSubmit({children, click}, style? ) {
    return (
        <Button style={style} onClick={click} variant="primary" type="submit">{children}</Button>
    );
  }
function ButtonBlue({children, size}) {
    return (
        <Button variant="primary" size={size}>{children}</Button>
    );
  }
function ButtonCheck({children, size, click}) {
    return (
        <Button onClick={click} variant="primary" size={size}>{children}</Button>
    );
  }
function ButtonOptions({children, size, style, click}) {
    return (
        <Button onClick={click} style={style} variant="primary" type="submit" size={size}>{children}</Button>
    );
  }
function ButtonDelete({children, style, click}) {
    return (
        <Button onClick={click} style={style} variant="primary">{children}</Button>
    );
  }
  
  export { ButtonHome, ButtonBlue, ButtonSubmit,ButtonOptions, ButtonCheck, ButtonDelete };
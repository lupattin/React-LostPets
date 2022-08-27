import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MyRoutes } from "./router";
import { RecoilRoot } from "recoil";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <MyRoutes></MyRoutes>
    </BrowserRouter>
  </RecoilRoot>  
);

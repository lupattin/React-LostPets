import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { PetsPage } from "../pages/PetsPage";

function MyRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="PetsPage/" element={<PetsPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export { MyRoutes };

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Layout } from "./Layout";
import { Otp } from "./components/Otp/Otp";
import { Cards } from "./components/Cards/Cards";
import { DataTable } from "./DataTable/DataTable";
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<Layout />></Route>
      <Route path="/otp-form" element=<Otp /> />
      <Route path="/course-list" element=<Cards /> />
      <Route path="/batches" element=<DataTable /> />
      <Route path="*" element=<h1>Not Found</h1> />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "../views/Dashboard";
import Karyawan from "../views/Karyawan";
import Jabatan from "../views/Jabatan";
import Department from "../views/Department";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Karyawan />,
      },
      {
        path: "departemen",
        element: <Department />,
      },
      {
        path: "jabatan",
        element: <Jabatan />,
      },
    ],
  },
]);

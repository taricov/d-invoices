/* eslint-disable prettier/prettier */
import MasterLayout from "@/layouts/MasterLayout";
import { type AppRouteObject } from "@/router/interface";
import Page404 from "@/pages/Status/Page404";
import { lazy } from "react";
import Invoices from "@/pages/Invoices";

// Lazy load the routes to improve performance
const Home = lazy(() => import("@/pages/Home"));

const routes: AppRouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/invoices",
    element: <MasterLayout />,
    children: [
      {
        index: true,
        element: <Invoices />
      }
    ]
  },
  {
    path: "/*",
    element: <Page404 />
  }
];

export default routes;

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Accordion } from "./Accordion";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Accordion,
      },
    ],
  },
]);

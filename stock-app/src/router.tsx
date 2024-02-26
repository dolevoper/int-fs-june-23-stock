import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import TestComponent from "./TestComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <p>Main Screen Here</p>,
      },
      {
        path: "/newItem",
        Component: TestComponent,
      },
    ],
  },
]);

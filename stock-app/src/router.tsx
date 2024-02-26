import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { LocationsPage } from './LocationsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: <LocationsPage locations={[]} />,
      },
    ],
  },
]);

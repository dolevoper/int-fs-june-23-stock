import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { LocationsPage } from './LocationsPage';
import { getLocations } from './locationsApi';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        element: <LocationsPage />,
      },
      {
        path: '/:main',
        Component: LocationsPage,
        loader() {
          return getLocations();
        },
        errorElement: <p>Locations not found</p>,
      },
    ],
  },
]);

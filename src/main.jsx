import React from "react";
import ReactDOM from "react-dom/client";
import "./App.scss";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages";
import NavBar from "./components/login/NavBar";
import LocalisationPage from "./pages/LocalisationPage";
import LocationCard from "./pages/LocationCard";
import Login from "./pages/Login";
import LocalisationsSearch from "./pages/LocalisationsSearch";
import Profil from "./components/Profil";
import FavoritePage from "./pages/FavoritePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: `/location/:id`,
    element: <LocalisationPage />,
  },
  {
    path: `/description/:id`,
    element: <LocationCard />,
  },
  {
    path: `/login`,
    element: <Login />,
  },
  {
    path: `/localisations`,
    element: <LocalisationsSearch />,

  },
  {
    path: `/profil`,
    element: <Profil />,
  },
  {
    path: `/favorite`,
    element: <FavoritePage />,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

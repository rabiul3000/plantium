import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout.jsx";
import Home from "../pages/Home/Home.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Register from "../pages/Register/Register.jsx";
import Login from "../pages/Login/Login.jsx";
import MyPlants from "../pages/MyPlants/MyPlants.jsx";
import AddPlant from "../pages/AddPlant/AddPlant.jsx";
import AllPlants from "../pages/AllPlants/AllPlants.jsx";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute.jsx";
import LoadingPage from "../pages/Loading/LoadingPage.jsx";
import PlantDetail from "../pages/PlantDetail/PlantDetail.jsx";
import UpdatePlant from "../pages/UpdatePlant/UpdatePlant.jsx";
import About from "../pages/About/About.jsx";
import ShowError from "../pages/ShowError/ShowError.jsx";
import Support from "../pages/Support/Support.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
// import axios from 'axios'

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all_plants",
        Component: AllPlants,
      },
      {
        path: "/add_plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },

      {
        path: "/plant/:id",
        element: (
          <PrivateRoute>
            <PlantDetail />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "/update_plant/:id",
        element: (
          <PrivateRoute>
            <UpdatePlant />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage />,
      },
      {
        path: "/my_plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <LoadingPage />,
        errorElement: <ShowError />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/support",
        Component: Support,
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import About from "../Pages/About";
import PrivateRouter from "./PrivateRouter";
import Bookings from "../Pages/Bookings";
import ServiceDetails from "../Pages/ServiceDetails";
import Checkout from "../Pages/Checkout";
import AddService from "../Pages/AddService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <h3>All Services</h3>,
      },
      {
        path: "/addservice",
        element: <AddService />,
      },
      {
        path: "/service/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails />,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <Checkout />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/about",
        element: (
          <PrivateRouter>
            <About />
          </PrivateRouter>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRouter>
            <Bookings />
          </PrivateRouter>
        ),
      },
    ],
  },
]);

export default router;

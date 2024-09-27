import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Root from "../components/Home/Root";
import Products from "../components/Others/Products/Products";
import Services from "../components/Others/Services/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
]);

export default router;

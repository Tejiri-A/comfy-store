import { createBrowserRouter, RouterProvider } from "react-router";
import {
  Register,
  Login,
  HomeLayout,
  Landing,
  Products,
  SingleProduct,
  Cart,
  Orders,
  Checkout,
  About,
  Error,
} from "./pages/index.js";

import { ErrorElement } from "./components/index.js";

// loaders
import { loader as landingLoader } from "./pages/Landing.jsx";
// actions

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: "products", element: <Products /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;

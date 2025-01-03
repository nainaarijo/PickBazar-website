import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";
import App from "./App";
import ProductDetailsPage from "./components/ProductDetails/ProductDetails";
import ProfileDashboard from "./components/AccountData/Profile";
import UpdateProfilePage from "./components/AccountData/UpdateProfile";
import Layout from "./components/Layout/Layout";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Layout />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "", 
        element: <App />,
      },
      {
        path: "ProductDetailsPage/:id",
        element: <ProductDetailsPage />,
      },
      {
        path: "profile",
        element: <ProfileDashboard />,
      },
      {
        path: "update-password",
        element: <UpdateProfilePage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

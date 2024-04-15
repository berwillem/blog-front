import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Pages/Register/Register.jsx";
import Login from "./Pages/Login/Login.jsx";
import SideMenuAdmin from "./components/SideMenuAdmin/SideMenuAdmin.jsx";
import Notfound from "./Pages/notfound/Notfound.jsx";
import Post from "./Pages/Post/Post.jsx";
import Admin from "./Pages/Admin/Admin.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/post",
    element: <Post/>
  },
     {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

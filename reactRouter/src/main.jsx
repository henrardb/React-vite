import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import { Layout } from "./Layout.jsx";
import User from "./Components/User/User.jsx";
import Github, { infoLoader } from "./Components/Github/Github.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./Components/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about/" element={<About />} />
      <Route path="contact/" element={<Contact />} />
      <Route path="user/" element={<User />}>
        <Route path=":userID" element={<User />} />
      </Route>
      <Route loader={infoLoader} path="Github" element={<Github />} />
      <Route path="*" element={<div>Not found</div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

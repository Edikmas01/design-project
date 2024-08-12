import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { ProjectPage } from "./pages/project/ProjectPage.jsx";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage.js";
import { HomePaga } from "./pages/HomePage/HomePage.jsx";
import { ProjectOne } from "./pages/project/ProjectOne/ProjectOne.jsx";
import "./i18n.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePaga />,
      },
      {
        path: ":category",
        children: [
          {
            index: true,
            element: <ProjectPage />,
          },
          {
            path: ":projectId",
            element: <ProjectOne />,
          },
        ],
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Suspense fallback={<div>Loading.....................</div>}></Suspense>
    <App />
  </RouterProvider>
);

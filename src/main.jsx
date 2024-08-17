import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { ProjectPage } from "./pages/ProjectPage/ProjectPage.jsx";
import { ServicesPage } from "./pages/ServicesPage/ServicesPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { ProjectPageOne } from "./pages/ProjectPage/ProjectPageOne/ProjectPageOne.jsx";
import "./i18n.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
            element: <ProjectPageOne />,
          },
        ],
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <ServicesPage />,
          },
          {
            path: ":id",
            element: <ServicesPage />
            
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <Suspense fallback={<div>Loading.....................</div>}></Suspense>
    <App />
  </RouterProvider>
);

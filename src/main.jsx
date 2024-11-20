import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Display from "./components/Display.jsx";
import DisplayAlbum from "./pages/DisplayAlbum.jsx";
import PlayerContextProvider from "./context/PlayerContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Display />,
      },
      {
        path: "/album/:id",
        element: <DisplayAlbum />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerContextProvider>
      <RouterProvider router={router} />
    </PlayerContextProvider>
  </StrictMode>
);

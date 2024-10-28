// Importando as rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Importando as páginas da aplicação
import  Home  from "./pages/Home";
import  SearchPage  from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};

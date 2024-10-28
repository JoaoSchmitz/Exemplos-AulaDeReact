// Importando as rotas
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { NameProvider } from "./contexts/name";

// Importando as páginas da aplicação
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const AppRoutes = () => {
  return (
    <Router>
      <NameProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchPage />} />
        </Routes>
      </NameProvider>
    </Router>
  );
};

export default AppRoutes;

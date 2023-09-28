import { Route, Routes } from "react-router-dom";
import Marque from "../composants/marques/Marque";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Test</h1>} />
      <Route path="/marque/:id" element={<Marque />} />
      <Route path="/voitures">
        <Route path="creation" />
        <Route path="modifier" />
      </Route>
      <Route path="/login" />
    </Routes>
  );
};

export default MainRoutes;

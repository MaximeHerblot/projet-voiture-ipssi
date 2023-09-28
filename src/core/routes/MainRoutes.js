import { Route, Routes } from "react-router-dom";
import Marque from "../composants/marques/Marque";
import Home from "../composants/layout/home/Home";



const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
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

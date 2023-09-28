import { Route, Routes } from "react-router-dom";
import Marque from "../composants/marques/Marque";
import Home from "../composants/layout/home/Home";
import Login from "../composants/login/Login";
import Logout from "../composants/login/Logout";
import Voitures from "../composants/voitures/Voitures";
import CreationVoiture from "../composants/voitures/Creation";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/marque/:id" element={<Marque />} />
      <Route path="/voitures">
        <Route index element={<Voitures />} />
        <Route path="creation" element={<CreationVoiture />}/>
        <Route path="modifier" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
};

export default MainRoutes;

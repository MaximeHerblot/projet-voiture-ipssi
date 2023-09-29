import { Route, Routes } from "react-router-dom";
import Marque from "../composants/marques/Marque";
import Home from "../composants/layout/home/Home";
import Login from "../composants/login/Login";
import Logout from "../composants/login/Logout";
import Voitures from "../composants/voitures/Voitures";
import CreationVoiture from "../composants/voitures/Creation";
import { useContext } from "react";
import LoginContext from "../store/login-context";




const MainRoutes = () => {
  const login = useContext(LoginContext);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marque/:id" element={<Marque />} />
      <Route path="/voitures">
        <Route index element={<Voitures />} />
        {login.logged && (
          <>
            <Route path="creation" element={<CreationVoiture />} />
            <Route path="modifier/:id" element={<CreationVoiture />}/>
          </>
        )}
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element="La route n'a pas été trouvé" />
    </Routes>
  );
};

export default MainRoutes;

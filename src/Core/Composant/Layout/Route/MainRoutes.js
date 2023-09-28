import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      
      <Route path ="/" element={<Home></Home>} />
      
    </Routes>
  );
};

export default MainRoutes;


import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainRoutes from './Core/Composant/Layout/Route/MainRoutes';
import Menu from './Core/Composant/Layout/Menu';
//import logo from './logo.svg';



function App() {
  return (
   <BrowserRouter >
        
          <Menu></Menu>
          <MainRoutes></MainRoutes>
        
   </BrowserRouter>
  );
}

export default App;

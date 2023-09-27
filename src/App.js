import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';

function App() {
  return (
   <BrowserRouter basename='/' >
    <MainRoutes />
    
   </BrowserRouter>
  );
}

export default App;

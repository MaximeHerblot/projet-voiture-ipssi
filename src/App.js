import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import Layout from './core/composants/layout/Layout';

function App() {
  return (
   <BrowserRouter basename='/' >
    <Layout />
    <MainRoutes />
    
   </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';

function App() {
  return (
   <BrowserRouter basename='/' >
    <MainRoutes />
    
   </BrowserRouter>
  );
}

export default App;

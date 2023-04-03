<<<<<<< HEAD
import logo from './logo.svg';
import RegisterPage from './pages/register/register';
import HomePage from './pages/home/home';
import LoginPage from './pages/login/login';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
=======
import React from 'react';
import RegisterPage from './pages/register/register';
import HomePage from './pages/home/home';
import Sign from './components/login_register';
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
>>>>>>> 3192f7b (versao0304)




function App() {
  return (
    <div className="App">
<<<<<<< HEAD
       
    <HomePage/>
=======

      
       
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/second-page" element={<Sign/>}/>
      <Route path="/register-page" element={<RegisterPage/>}/>
      <Route path="/dashboard-page" element={<Dashboard/>}/>

    </Routes>
    
    
    </BrowserRouter>
>>>>>>> 3192f7b (versao0304)
      
    </div>
  );
}

export default App;


import React from 'react';
import RegisterPage from './pages/register/register';
import HomePage from './pages/home/home';
import Sign from './components/login_register';
import Dashboard from './pages/dashboard/dashboard';
import { BrowserRouter, Routes,Route } from 'react-router-dom';





function App() {
  return (
    <div className="App">


      
       
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/second-page" element={<Sign/>}/>
      <Route path="/register-page" element={<RegisterPage/>}/>
      <Route path="/dashboard-page" element={<Dashboard/>}/>

    </Routes>
    
    
    </BrowserRouter>

      
    </div>
  );
}

export default App;

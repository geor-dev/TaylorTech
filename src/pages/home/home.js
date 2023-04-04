import img_principal from '../../assets/img_tela_principal.png';
import logo_tech from '../../assets/logo_sem_fundo.png';
import Comp1 from '../../components/Componente1';
import '../home/principal.css';
import React from 'react';


import RegisterPage from '../register/register';
import { NavLink } from 'react-router-dom';


function HomePage () {

  
return(
    <div>
        <img className='fundo' src={img_principal} alt="img_principal" />

       
       <div className='menu-principal-navegação'>{/* início menu de navegação */}
       
         <div className='menu-1'>
         <img className='logo-sem-fundo' src={logo_tech} alt="logo" />
         </div>
         
         <div className='menu-2'>


            <ul>
              <li>
                <NavLink
                className=""
                activeClassName=""
                to="/second-page"
                >
                  INÍCIO
                </NavLink>
                <NavLink
                className=""
                activeClassName=""
                to="/second-page"
                >
                  CONTATOS
                </NavLink>
                <NavLink
                className=""
                activeClassName=""
                to="/second-page"
                >
                  SOBRE
                </NavLink>

              </li>

            </ul>
          
           
           
         </div>
         

            
        
       </div>{/* fim menu de navegação */}
       <Comp1/>
    </div>
)
        
    
}

export default HomePage;
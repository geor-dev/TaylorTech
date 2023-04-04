

import React from "react";
import '../../components/login_register.css';
import logo_box from'../../assets/Logo_SemFundo_2.png'
import google from '../../assets/google.png'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import apple from '../../assets/apple.png'
import { NavLink,useNavigate } from 'react-router-dom';




function RegisterPage () {

    const navigate =useNavigate();

    function goToDashboardPage(){
        navigate("/dashboard-page")
    }
    
        return(
            <div className="formulario">
                <div className="box-1">
                    <h1 className="titulo">Bem vindo</h1>
                    <img className="logo-box" src={logo_box} alt="logo" />
                </div>
                <div className="box-2">
                    <div className="caixa-form">
                    <div className="apps">
                        <img className="link-app" src={google} alt="apps" />
                        <img className="link-app" src={linkedin} alt="apps" />
                        <img className="link-app" src={apple} alt="apps" />
                        <img className="link-app" src={instagram} alt="apps" />
                        <img className="link-app" src={facebook} alt="apps" />
    
                    </div>
                    <h2>ou</h2>
                    <input type="text" placeholder="Nome Completo" />
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Senha"/>
                    <input type="text" placeholder="Confirmar Senha"/>
                    <button onClick={goToDashboardPage} className="button-login">CADASTRAR</button> 
                    
                    
                    </div>
                    
    
                </div>
    
    
            </div>

    )
}

export default RegisterPage;
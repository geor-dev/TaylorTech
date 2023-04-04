import "./Componente1.css";

import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate =useNavigate();

  function goToSecondPage(){
      navigate("/second-page")
  }
  

    return (
      <div>
        <div className="texto-principal">
        <h1>Sistema Automatizado para seu Negócio</h1>
        <p>Software Otimizado para melhorar a tomada de decisões e ter uma visão global das finanças de  seu negócio,
            para auxiliar microempreendor individual com uma interface dinâmica e agradável
        </p>
        <button onClick={goToSecondPage} className="button-sb">SAIBA MAIS</button>


        </div>
        
        
      </div>
    );
  };
  
  export default MyComponent;
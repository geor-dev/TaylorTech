import logo from './logo.svg';
import './App.css';
import img_principal from './assets/img_tela_principal.png';
import logo_tech from './assets/logo_sem_fundo.png';

function App() {
  return (
    <div className="App">

      <img className='img-principal' src={img_principal} alt="img_principal" />
       
      <div className='menu-principal-navegação'>{/* início menu de navegação */}
      
        <div className='menu-1'>
        <img className='logo-sem-fundo' src={logo_tech} alt="logo" />
        </div>
        
        <div className='menu-2'>
          <ul>
            <li><a href="">INICIO</a></li>
            <li><a href="">CONTATOS</a></li>
            <li><a href="">SOBRE</a></li>

          </ul>

        </div>

       
      </div>{/* fim menu de navegação */}

      
    </div>
  );
}

export default App;

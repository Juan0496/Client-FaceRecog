import './App.css'
import Proces from './components/Proces'
import incognito from './assets/incognito.svg'
function App() {
  
  return (
    <div>
      <header className="App-header">
        <h1>Covered Face Detector App</h1>        
      </header>
      <Proces />
      <footer >
        <div className='titulo-foot'>
          <h1>Sobre Covered Face Detector App</h1>
      </div>
        <div className='sobre-app'>         
          <div className='descripcion-proy'>
            <h2 > Hola, gracias por visitar Covered Face Detector App; en el desarrollo de esta aplicacion, se utilizaron las siguientes tecnologias:
            </h2>
            <h3> React:</h3>
            <p>Junto a Vite, para la elaboración del Frontend.</p>
            <h3> Fast Api:</h3>
            <p>Sirvio para la creacion de una Api, que establece la comunicación con el servidor; el cual, procesará la imagen, mediante una red neuronal convolucional
              entrenada previamente.
            </p>
            <ul>Para el entrenamiento y procesamiento de las imagenes, se utilizaron las siguientes libreria de python.</ul>
              <li>OpenCV</li>
              <li>Numpy</li>
              <li>PIL</li>
              <li>Io</li>
              <li>Time</li>
              <li>Matplotlib</li>
              <li>Tensorflow</li>
              <li>Os</li>              
          </div>        
           <div className='mi'>
            <div className='avatarcont'>
            <img className='avatar' src={incognito}></img>
            </div>
            <div className='mi-mensaje'> 
            <h2>Sobre el desarrollador:</h2>
            <p>
              Mi nombre Juan Moreno, soy mecatrónico de profesión, y entusiasta de las tecnologias IOT; elaboré este proyecto,
              con el fin de poner en práctica los conocimientos que adquiri sobre desarrollo web, procesamiento de imagenes e inteligencia
              artificial. 
    
            </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

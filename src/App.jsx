import './App.css'
import Proces from './components/Proces'
import incognito from './assets/incognito.svg'
function App() {
  
  return (
    <div>      
      <Proces />
      <footer >
        <div className='titulo-foot'>
          <h1 className='text3'>Sobre Covered Face Detector</h1>
      </div>
        <div className='sobre-app'>         
          <div className='descripcion-proy'>
            <h2 > Hola, gracias por visitar Covered Face Detector; en el desarrollo de esta aplicacion, se utilizaron las siguientes tecnologías:
            </h2>
            <h3> React:</h3>
            <p>Junto a Vite, para la elaboración de la interfaz de usuario.</p>
            <h3> Fast Api:</h3>
            <p>Sirvio para la creacion de una API, que establece la comunicación con el servidor, quien procesará la imagen mediante una red neuronal convolucional;
              la cuál, entrené previamente con el fin de reconocer tres estados de imagen; en primer lugar, una imagen con un rostro descubierto; en segundo lugar, un rostro cubierto con mascarilla;
              y por ultimo, un rostro cubierto con un casco.
            </p>
            <ul>Para el entrenamiento y procesamiento de las imágenes, se utilizaron las siguientes librerias de python.</ul>
              <li>Io</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>Os</li>  
              <li>PIL</li>
              <li>Tensorflow</li>
              <li>Time</li>
                          
          </div>        
           <div className='mi'>
            <div className='avatarcont'>
            <img className='avatar' src={incognito}></img>
            </div>
            <div className='mi-mensaje'> 
            <h2 className='text4'>Sobre el desarrollador:</h2>
            <p className='text4'>
              Mi nombre es Juan Moreno, soy mecatrónico de profesión, y especializado en desarrollo IOT; elaboré este proyecto,
              con el fin de poner en práctica los conocimientos que adquirí sobre desarrollo web, procesamiento de imágenes e inteligencia
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

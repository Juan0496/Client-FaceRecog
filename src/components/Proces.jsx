import React, { useRef, useEffect, useState } from 'react';
import Resultado from './Resultado';
import Video from './video';
import { Getvideo } from '../functions/videoref';
import { Clear } from '../functions/boton';
import { sendMessage} from '../functions/api';
import './componentes.css'
import descubierto from '../assets/descubierto.svg'
import mascarilla from  '../assets/mascarilla.svg'
import casco from '../assets/casco .svg'
function Proces() {
  const [boton, SetBoton]=useState(true);
  const [imageUrl, setImageUrl] = useState('');  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  //const canvasRef = useRef(null);
  Getvideo(videoRef);
  const clear = () => Clear(canvasRef,SetBoton);
  //const captura = () =>Captura(videoRef, canvasRef ,sendMessage,SetBoton ,setImageUrl);
  const botfalse = () => SetBoton(false);
  return (
    <>
    <div className='identificadores'>
      <img className='identImage' src={casco}></img>
      <img className='identImage' src={mascarilla}></img>
      <img className='identImage' src={descubierto}></img>
    </div>
    <div className="containerProc">
         

          {/*<video ref={videoRef} width="320" height="240" />*/}
          <Video videoRef={videoRef} boton={boton}  Clear={clear} botfalse={botfalse}></Video>             
        
          <Resultado canvasRef={canvasRef}  boton={boton} imageUrl={imageUrl} setImageUrl={setImageUrl} videoRef={videoRef}  sendMessage={sendMessage}></Resultado>
        
         
    </div>  
    </>  
  );
};
export default Proces;

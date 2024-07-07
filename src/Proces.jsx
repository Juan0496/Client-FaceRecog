import React, { useRef, useEffect, useState } from 'react';

function Proces() {
  const [boton, SetBoton]=useState(true);
  const [imageUrl, setImageUrl] = useState('');
  
    const constrains = {
        video:{width:320, height:240}
       
    }
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
   
    useEffect(() => {
        // Obtener el stream de video de la cámara
        navigator.mediaDevices.getUserMedia(constrains)
          .then(stream => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();           
          })
          .catch(err => {
            console.error("Error al acceder a la cámara: ", err);
          });
          
      }, [videoRef]);

    
      const Clear= () => {
        let canvas= canvasRef.current
        let ctx= canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height)
        SetBoton(true)
      }
       
      

const captura=()=>{
  let video = videoRef.current
  let canvas= canvasRef.current
  canvas.width = videoRef.current.videoWidth;
  canvas.height = videoRef.current.videoHeight;
  let ctx= canvas.getContext('2d');
  ctx.drawImage(video,0,0, canvas.width,canvas.height)    
  SetBoton(false)
  sendMessage(canvas);
} 

const sendMessage = async (canvas) => {
  
  canvas.toBlob((blob) => {
    const formData = new FormData();
    formData.append('file', blob, 'capture.png');
    fetch('http://127.0.0.1:8000/recibir/', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.blob())
    .then(data => {
      const imageObjectURL = URL.createObjectURL(data);
      setImageUrl(imageObjectURL);
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, 'image/png');

  
};

  return (
    <div className="grid grid-flow-col auto-cols-max">
      <div className="aply-content">    
        <div>
          <video ref={videoRef} width="320" height="240" />
        </div>
        <div>
            <canvas className='' ref={canvasRef}/>
        </div >        
      </div>
        <div>
          {boton? (<button onClick={captura}> TOMAR CAPTURA</button>) : (<button onClick={Clear}> LIMPIAR IMAGEN</button>)}
        </div> 
        <div>          
          <img src={!boton ? imageUrl:""} alt="Imagen con filtro blur" ></img>
        </div>    
    </div>
  );
};
export default Proces;

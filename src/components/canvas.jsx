import React, { useEffect} from 'react';

import './componentes.css'
function Canvas(props) {
    
    const{videoRef,sendMessage,setImageUrl,canvasRef}=props   
    useEffect(() => {
        // Obtener el stream de video de la cámara
        const video = videoRef.current;
        const canvas= canvasRef.current;    
        canvas.width = (video.videoWidth)/8;
        canvas.height = (video.videoHeight)/8;  
        const ctx= canvas.getContext('2d');
        ctx.drawImage(video,0,0, canvas.width,canvas.height)            
        sendMessage(canvas,setImageUrl );
  }, []);
   
  return (
    <div className="captura">
    <canvas  ref={canvasRef}  className='image'>            
   </canvas>  
    </div > 
  );
}
export default Canvas;
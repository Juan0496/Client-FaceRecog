import  {useEffect} from 'react';

export const Getvideo = (videoRef )=>{
const videoref  = videoRef 
const constrains = {
    video:{width:220, height:220}       
}
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
      
  }, [videoref ]);
}
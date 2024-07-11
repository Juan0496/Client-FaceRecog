
export const Captura=(videoRef,canvasRef,sendMessage, SetBoton,setImageUrl)=>{
    const setimageUrl = setImageUrl
    const Setboton = SetBoton
    const sendmessage = sendMessage
    const videoref = videoRef
    const canvasref = canvasRef
    const video = videoref.current
    const canvas= canvasref.current
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx= canvas.getContext('2d');
    ctx.drawImage(video,0,0, 320,240)    
    Setboton(false)
    sendmessage(canvas,setimageUrl );
  } ;

export  const Clear= (canvasRef, SetBoton) => {
    const Setboton =SetBoton
    const canvasref = canvasRef
    const canvas= canvasref.current
    const ctx= canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height)
    Setboton(true)
  } 

import './componentes.css'

function Video(props) {
    const {videoRef,boton,Clear,botfalse}=props
    
return(
<div className='videoCont'>
    <div className='cab-der'>
        <div className='titcont1'>
        <h1>  Covered</h1>
        </div>
          
          <div className="barra2">
          <h1 className='text3'>Face</h1>
          </div>
    </div>
    <div className='button-cont'>
        <div className='button-cont-b'>
          <h1 className='text2'> Detector</h1>
        </div>
        <div className='barra2'>
        </div> 
    </div>
    <div className='video-cont'>
        <div className='barra1b'>
           
           <p className='text4'>Especificaciones para un correcto funcionamiento:</p>  
                <ul className='text4'>
                <li>El rostro debe estar en el centro de la imagen.</li>
                <li>La calidad de la imagen
                    influye en el resultado.</li>                             
                <li>El enfoque debe estar 
                como máximo a 10 centímetros debajo de los hombros.</li>
                <li>Los primeros intentos podrían no arrojar resultados; debido a la latencia de arranque del servidor.</li>
            </ul>
        </div> 
        <video ref={videoRef} className='video'/>   
        <div className='barra1'>

        </div> 
    </div>
    <div className='button-cont'>
        <div className='button-cont-b'>
        {boton? (<button onClick={botfalse} className='button'> TOMAR CAPTURA</button>) : (<button onClick={Clear} className='button'> LIMPIAR IMAGEN</button>)}        
        </div>
        <div className='barra2'>
        </div> 
    </div>
</div>
)
}
export default Video

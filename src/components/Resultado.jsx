import incognito from '../assets/incognito.svg'
import Canvas from './canvas';
function Resultado(props) {
    
    const {boton,imageUrl,videoRef,sendMessage, setImageUrl,canvasRef}=props
    const dateTime = new Date();
    const day = dateTime.getDay();
    const dayNames = ["Domingo", "Lunes", "Martes","Miércoles", "Jueves","Viernes","Sábado" ];
    const year = dateTime.getFullYear();
    const month = dateTime.getMonth();
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    const horas =  dateTime.getHours();
    const hour = horas < 10 ? `0${horas}`: horas
    const minutos = dateTime.getMinutes();
    const minutes = minutos < 10 ? `0${minutos }`: minutos 
    const segundos = dateTime.getSeconds();
    const seconds = segundos < 10 ? `0${segundos }`: segundos
    const time = `${hour}:${minutes}:${seconds} `
return(
<div className="resultado">
    <div className="result-cont">          
        { boton ? <h1 className='mensaje'>Esperando resultado...</h1> : <h1 className='mensaje' >{`99.9% de probabilidad, de que su rostro este ${imageUrl}`}</h1>}
    </div>   
    <div className="datos-cont">
        <div className="datos">
            <div className='text-cont'>
            <h1 className='mensaje'>Año:</h1>              
            {boton ? <h2 className='mensaj-cont'>...</h2> : <h2 className='mensaj-cont'>  {year}</h2>  }
            <h1 className='mensaje'>Mes: </h1>
            {boton ? <h2 className='mensaj-cont'>...</h2> : <h2 className='mensaj-cont'>  {months[month]}</h2>  }
            <h1 className='mensaje'>Dia:</h1>
            {boton ? <h2 className='mensaj-cont'>...</h2> : <h2 className='mensaj-cont'> {dayNames[day]} </h2>   } 
            <h1 className='mensaje'>Hora:</h1>
            {boton ? <h2 className='mensaj-cont'>...</h2> : <h2 className='mensaj-cont'>   {time}</h2>  }
            </div>          
        </div>
            { boton ? <div className="captura"><img src={incognito} className='image'></img> </div > :
            <Canvas videoRef={videoRef} sendMessage = {sendMessage} setImageUrl={setImageUrl} canvasRef={canvasRef}>            
            </Canvas>
}   
    </div>            
</div>
)
}
export default Resultado
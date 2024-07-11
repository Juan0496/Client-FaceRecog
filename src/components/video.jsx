import './componentes.css'

function Video(props) {
    const {videoRef,boton,Clear,botfalse}=props
    
return(
<div className='videoCont'>
    <div className='video-cont'>
        <video ref={videoRef} className='video'/>    
    </div>
    <div className='button-cont'>
        {boton? (<button onClick={botfalse} className='button'> TOMAR CAPTURA</button>) : (<button onClick={Clear} className='button'> LIMPIAR IMAGEN</button>)}        
    </div>
</div>
)
}
export default Video

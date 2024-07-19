import descubierto from '../assets/descubierto.svg'
import mascarilla from  '../assets/mascarilla.svg'
import casco from '../assets/casco .svg'
export default function Identificadores(props){
    const {imageUrl,boton} = props
    const resultados = ["con un casco","descubierto","con una mascarilla"]
    
return(
<div className='identificadores'>
      <img className={imageUrl === resultados[0] && boton===false ? 'identImageSelect' : 'identImage'} src={casco}></img>
      <img className={imageUrl=== resultados[2] && boton===false ? 'identImageSelect' : 'identImage'} src={mascarilla}></img>
      <img className={imageUrl === resultados[1] && boton===false ? 'identImageSelect' : 'identImage'} src={descubierto}></img>
</div>
)
}
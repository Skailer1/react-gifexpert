import { GifItem } from "./GifItem";
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {
 
  
  const {images, isLoading} = useFetchGifs(category);

 /*   const [images, setImages] = useState([]);

    //puesto que el useEffect espera una funcion no es posible
    //usar el async este trae una promesa implicita (objeto)
    //pero podemos crear una funcion async antes y su resultado
    //pasarlo al useEffect
    
    const getImages = async()=> {
        const newImages = await getGifs(category);
        setImages(newImages);
    }
    
//useEffect le dice a react que mantenga  el estado que solo se,
//ejecute una vez no importa si hay cambios o si el componente
//se re dibuja.
//esto ayuda a evitar consumo extra de peticiones al API


//sirve para disparar eventos secundarios, es decir cuando la
//categoria cambie, cuando el componente se renderice, etc.
useEffect(()=>{

        getImages();

},[]) 
//nota: el sgundo valor del use effect para este caso es un arreglo
//de las depencidas y al dejarlo vacio significa que el hook
//solo se va a disparar la primera vez que se crea y construye el 
//componente "GifGrid".
*/

  return (
    <>
    <h3>{category}</h3>

    {
      isLoading && (<h2 >Cargando..</h2>)
        
    }


    <div className="card-grid">
       {
        images.map((image)=>(
            <GifItem 
            key={image.id}
            {...image}
            
            />     
        ))
        //nota: usar los () trae un return implicito al usar
        //{} se debe hace el return explicito
       }
        
    </div>
    </>
  )
}

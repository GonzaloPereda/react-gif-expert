import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category ); 

    // const [images, setImages] = useState([]);

    // useEffect(() => {
    //     getGifs( category )
    //         .then( newImages => setImages(newImages));
    // }, [])

  return (
    <>
        <h3> { category }</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
            // Es lo mismo
            //isLoading ? (<h2>Cargando...</h2>) : null
        }
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={image.id} 
                        { ...image }
                    />
                ))
                // es manera mas larga
                // images.map( img => (
                //     <li key={img.id}> {img.title }</li>
                // ))
            }
        </div>
        
    </>
  )
}

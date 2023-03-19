import supabase from "../supabase.js"
import { useEffect, useState } from 'react'

//import HuilePage from "../components/HuilePage"


const Huile = () => {
  const [fetchError, setFetchError] = useState(null)
  const [Huile, setHuile] = useState(null)

  useEffect(() => {
    const fetchHuile = async() =>{
      const{ data, error} = await supabase
        .from('Huile')
        .select()

        if (error){
          setFetchError('Could not fetch the Product')
          setHuile(null)
          console.log(error)
        }
        if (data){
          setHuile(data)
          setFetchError(null)
        }
    }
    fetchHuile()

  }, [])

  return (
    <div>
      {fetchError && (<p>{fetchError}</p>)}
      {Huile && (
        <div>
          {/* order-by buttons */}
          <div>
            {Huile.map(Huile => (
              //<HuilePage key={Huile.id} Huile={Huile} />
              <div>
            <h3> {Huile.name}</h3>
            <img src={Huile.picture} alt='Huile'></img>
            <h5> Description: {Huile.description}</h5>
            <p> Ingrédients: {Huile.ingredient} </p>
            <p> Propriétés: {Huile.properties} </p>
            <div> { Huile.price}€</div>

        </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Huile
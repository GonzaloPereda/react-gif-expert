import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    //Hook que cambia el html
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories] )
    }

  return (
    <>
        <h1>GifExpertsApp</h1>

        <AddCategory 
            // setCategories={ setCategories } 
            // on significa que emite algo
            onNewCategory={ onAddCategory }
        />
        
        { 
            categories.map( category => (
                    <GifGrid key={category} category={ category }/>
                ))
        }
    </>
  )
}

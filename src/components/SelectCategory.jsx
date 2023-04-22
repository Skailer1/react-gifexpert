import React, { useState } from 'react'

export const SelectCategory = ({onSelectedCategory}) => {

    const [category, setCategory] = useState('fruit');

    const onSelected = ({target})=>{
        setCategory(target.label);
    }



  return (
    <div>

     <label>

       What do we eat?

       <select value={category} onChange={onSelected}>

         <option value="fruit">Fruit</option>

         <option value="vegetable">Vegetable</option>

         <option value="meat">Meat</option>

       </select>

     </label>

     <p>We eat {category}!</p>

  
    </div>
  )
}

import {useState} from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);

const onAddCategory = (newCategory) => {

  if(categories.includes(newCategory)) return;

  //uso el operador spread para tener mi arreglo original de 
  //categorias y despues una coma donde adiciono el nuevo valor.
  setCategories([...categories, newCategory]);
}

  return (
    <>
    <h1>GifExpertApp</h1>   

      <AddCategory 
//de esta forma un evento se emite por default y de manera dinamica agregamos las categorias
      onNewCategory= {onAddCategory}
       />


       {/* <SelectCategory
       onSelectedCategory={onAddCategory}/> */}
    
      {
      categories.map((category) => (
      <GifGrid key={category}
      category={category} />
      ))
          
    }
     </>
  )
}

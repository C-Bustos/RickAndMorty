import style from './SearchBar.module.css'
import { useState } from 'react';




export default function SearchBar(props) {
const [id,setId]= useState('');

const handleChange=(event)=>{
   setId(event.target.value)
}

   return (
      <div className={style.div}>
         <input className={style.input} type='search' onChange={handleChange} value={id} />
         <button className={style.btn} onClick={()=> props.onSearch(id)}>Agregar</button>
      </div>
   );
}

import style from './Card.module.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({key,name,status,species,gender,origin,image,onClose,id}) {
   
   return (
      
      <>
        <div className={style.div}>
         <button className={style.button} onClick={()=>onClose(id)}>X</button>
         <img src={image} alt='' className={style.imagen} />
        <Link to={`/detail/${id}`}>
         <h4 className={style.nombre}>{name}</h4>
         </Link>
         <div className={style.data}>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         {/* <h2>{key}</h2>
          
         <h2>{status}</h2>
         
         <h2>{origin}</h2> */}
         </div>
         </div>
      </>
         
      
   );
}

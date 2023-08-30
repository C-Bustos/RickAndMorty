import style from './Card.module.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

 function Card({name,status,species,gender,origin,image,onClose,id,addFav,
   removeFav,
   myFavorites}) {
   const [isFav, setIsFav] = useState(false);
   const { pathname } = useLocation()
 
    useEffect(()=>{
       myFavorites.forEach(charFav => {
          charFav.id === id && setIsFav(true)
       })
    },[myFavorites])
 
   const handleFavorite = () => {
     if (isFav) {
       setIsFav(false);
       removeFav(id);
     } else {
       setIsFav(true);
       addFav({
         id,
         name,
         status,
         species,
         gender,
         origin,
         image,

       });
     }
   };
 
   return (
      
      <>
        <div className={style.div}>
         { pathname === '/home' && <button className={style.button} onClick={() => onClose(id)}>X</button> }
         {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
         ) : (
        <button onClick={handleFavorite}>🤍</button>
         )}
        
         <img src={image} alt='' className={style.imagen} />
        <Link to={`/detail/${id}`}>
         <h4 className={style.nombre}>{name}</h4>
         </Link>
         <div className={style.data}>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         
         </div>
         </div>
      </>
         
      
   );
}
export function mapDispatchToProps(dispatch) {
   return {
     addFav: function (character) {
       dispatch(addFav(character));
     },
     removeFav: function (id) {
       dispatch(removeFav(id));
     },
   };
 }
 
 export function mapStateToProps(state){
    return {
       myFavorites:state.myFavorites
    }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
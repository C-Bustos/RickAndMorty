import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import css from './Detail.module.css'

const Detail =() => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [ character, setCharacter ] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        // .then es un metodo de promesa
          .then((response) => response.json()) // Nos brinda info de la api y la parseamos
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } 
            else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            alert("No hay personajes con ese ID");
          });

        return setCharacter({});
      }, [id]);

      const handleClick =()=> {
        navigate('/home')
      } 


      //useEffect
      // useEffect(()=> {

      // }, [])

    return (
      <div className={css.container}>
        <div className={css.div}>
            <button className={css.btn} onClick={handleClick}>Home</button>
            <h2>Detail</h2>
            {
                character ? (
                    <div>
                        <h2>Name {character.name}</h2>
                        <h2>Status: {character.status}</h2>
                        <h2>Specie: {character.species}</h2>
                        <h2>Gender: {character.gender}</h2>
                        <h2>Origin: {character.origin?.name}</h2>
                        <img className={css.img} src={character.image} alt={character.name} />
                    </div>
                ) : (
                    ''
                )
            }
        </div>
      </div>
        
    )
}

export default Detail

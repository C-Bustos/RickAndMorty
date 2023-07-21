// import Card from './Card/Card.jsx';
import style from './Cards.module.css'
import Card from "../Card/Card";

export default function Cards(props) {
   
   return (

   
           <div className={style.div}>
      
         {props.characters.map((x)=>(

        
             <Card
             id={x.id}
            key={x.id}
            name={x.name}
            status={x.status}
            species={x.species}
            gender={x.gender}
            origin={x.origin.name}
            image={x.image}
            onClose={props.onClose }
            />
         ))}
            
   
</div>
   );
      };

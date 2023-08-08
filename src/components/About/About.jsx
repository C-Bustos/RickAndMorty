import { NavLink } from "react-router-dom"
import css from './About.module.css'

export default function About() {
  return (
    <div className={css.div}>
        <div>
           <h1>hola soy carlos</h1>
       
       <NavLink  to='/home' >
        <button className={css.button}>BACK</button>
       </NavLink>
        </div>
    
    </div>
  )
}

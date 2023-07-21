import { NavLink } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import Style from './Nav.module.css'


export default function Nav(props) {
  return (
    <div className={Style.div} >
        <div className={Style.div2}></div>
          <button className={Style.btn}>
            <NavLink  to='/about'> ABOUT</NavLink>
          </button>
          
          <button className={Style.btn}>
          <NavLink to='/home'> HOME</NavLink>
          </button>
        
        <SearchBar onSearch={props.onSearch}/>
        
    </div>
  )
}

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState , useEffect} from 'react';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation,useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites";

function App() {
   
   let [characters,setCharacters]=useState([]);
   const {pathname}=useLocation();
   const navigate = useNavigate()
   const [access , setAccess]=useState(false)
  

   

   const login= async(userData)=>{
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data}= await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;
          setAccess(access);
          access && navigate('/home');
         } catch (error) {
         
         }
         }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   

   const onSearch= async (id) => {
     try {
      const {data}=await axios(`http://localhost:3001/rickandmorty/character/${id}`)
     if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } 
     } catch (error) {
        alert('¡No hay personajes con este ID!');
     }
   }



     
    const onClose=(id)=>{
      const charactersFiltered=characters.filter(character =>character.id !== Number(id))
      setCharacters(charactersFiltered)

   } 
   
   
  
   return (
    
      
        <div className='App'>
         
         {pathname !=='/' && <Nav onSearch={onSearch}/>}
        <Routes>
         
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path="/favorites" element={<Favorites/>}/>
          
         
         </Routes> 
      </div> 
     
    
      
      
   );
}

export default App;

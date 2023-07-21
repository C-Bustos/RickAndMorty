import './App.css';
import Cards from './components/Cards/Cards.jsx';
import { useState , useEffect} from 'react';
import Nav from './components/nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation,useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App() {
   
   let [characters,setCharacters]=useState([]);
   const {pathname}=useLocation();
   const navigate = useNavigate()
   const [access , setAccess]=useState(false)
   const EMAIL='carlosbustos1q1@gmail.com'
   const PASSWORD='carlos41'

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }  
    const onClose=(id)=>{
      const charactersFiltered=characters.filter(character =>character.id !== Number(id))
      setCharacters(charactersFiltered)

   } 
   
   
  
   return (
    
      
        <div className='App'>
         {/* <Nav onSearch={onSearch}/> */}
         {pathname !=='/' && <Nav onSearch={onSearch}/>}
        <Routes>
         
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/detail/:id' element={<Detail/>} />
          
         
         </Routes> 
      </div> 
     
    
      
      
   );
}

export default App;

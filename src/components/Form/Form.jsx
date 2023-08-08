import css from './Form.module.css'
import { useState } from 'react'
import validation from './validation'

export default function Form(props) {
  const {login}=props
  const [userData ,setUserData]= useState({
    email:'',
    password:''

  })

 const[errors, setErrors]=useState({})

  const handleChange =(evento)=>{
    setUserData({
      ...userData,
      [evento.target.name] : evento.target.value
    })

  setErrors(validation({
    ...userData,
    [evento.target.name] : evento.target.value
  }))
  }


  const handleSubmit=(evento)=>{
    evento.preventDefault()
    login(userData)
  }


  return (
    <div className={css.container}>
      
        <div  className={css.div}>

       
          
          <form>
            
        <label htmlFor='email' className={css.label}>Email: </label>
        <input type = 'email' placeholder='Email' value={userData.email} name='email' onChange={handleChange} ></input>

        <div className={css.errors}>{
          
           errors.email? (<p>{errors.email}</p>):errors.emailVacio ?(<p>{errors.emailVacio}</p>):(errors.lon)
        }
         </div>

        <br/>
        <label htmlFor='password' className={css.label}>Password: </label>
        <input type='password' placeholder='Password'  value={userData.password} name='password' onChange={handleChange} ></input>

        <div className={css.errors}>
        {

          errors.password?(<p>{errors.password}</p>):(<p>{errors.passCaracters}</p>)
        }
        </div>
        <br/>
        <button className={css.button} type='submit' onClick={handleSubmit} >Submit</button>
       </form> 
       

        </div>
     </div>
  )
}

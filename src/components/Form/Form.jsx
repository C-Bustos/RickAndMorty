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
        <lable className={css.label}>Email</lable>
        <input type = 'email' placeholder='Email' value={userData.email} name='email' onChange={handleChange} ></input>

        {
          
          // errors.email? (<p>{errors.email}</p>):errors.emailVacio ?(<p>{errors.emailVacio}</p>):(errors.lon)
        }

        <br/>
        <lable className={css.label}>Password</lable>
        <input type='password' placeholder='Password'  value={userData.password} name='password' onChange={handleChange} ></input>

        {

          // error.password?(<p>{error.password}</p>):(<p>{error.passCaracters}</p>)
        }

        <br/>
        <button className={css.btn} type='submit' onClick={handleSubmit} >Submit</button>
       </form> 
       

        </div>
     </div>
  )
}

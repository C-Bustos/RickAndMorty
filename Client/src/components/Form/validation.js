

const validation = (data)=>{


const emailRegexp= new RegExp(/\S+@\S+\.\S+/)
const passwordRegexp = new RegExp(/^[a-z0-9_-]{6,18}$/)

  let errors={}
  if(!emailRegexp.test(data.email)){
    errors.email="email invalido"
  }
  else if(data.email.length>35){
    errors.lon='el email debe ser menor a 35 caracteres'
  }
  else if(!data.email){
    errors.emailVacio='email no puede estar vacio'
  }
  else if(data.password.length<6||data.password.length>10) {
    errors.passCaracters='la contraseña debe tener entre 6 y 10 caracteres'
  }
  else if(!passwordRegexp.test(data.password)){
    errors.password="contraseña invalida"
  }
  return errors

}
export default validation
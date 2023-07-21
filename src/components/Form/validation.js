

const validation = (data)=>{


const emailRegexp= new RegExp(/\S+@\S+\.\S+/)
const passwordRegexp = new RegExp(/^[a-z0-9_-]{6,18}$/)

  let error={}
  if(!emailRegexp.test(data.email)){
    error.email="email invalido"
  }
  else if(data.email.length>35){
    error.lon='el email debe ser menor a 35 caracteres'
  }
  else if(data.email.length==0){
    error.emailVacio='email no puede estar vacio'
  }
  else if(data.password.length<6||data.password.length>10) {
    error.passCaracters='la contraseña debe tener entre 6 y 10 caracteres'
  }
  else if(!passwordRegexp.test(data.password)){
    error.password="contraseña invalida"
  }

}
export default validation
const http = require('http')
const data = require('./utils/data')

http.createServer((req,res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    // includes ayuda aq solo tnga q coincidir una parte de la url asi de true la parte que indico en el includes,esto sirve en caso en que quiero ir a esa pag pero el id va cambiando
    if(req.url.includes('/rickandmorty/character')){
        //para obtener el id traigo req.url(/rickandmorty/character/id) este es un string lo vuelvo array con split y le digo que corte en las barra y luego con at(-1) me trae solo el ultimo elemento del array
        const id=req.url.split('/').at(-1);
        //el metodo find corre el array de obj y me trae el que concida con el id
       const characterFound=data.find((character)=>{
         return character.id===+id
       })

        res.writeHead(200,{"Content-type":"application/json"})
        return res.end(JSON.stringify(characterFound))
    }
    

}).listen(3001,"localhost")

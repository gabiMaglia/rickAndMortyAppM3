
const axios = require( 'axios')


 const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=> {
       
        const dataObj = {
            id: id,
            name : data.name, 
            gender : data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        res.writeHead(200, { "Content-type": "aplication/json" })
        return res.end(JSON.stringify(dataObj))
        
    })
    .catch((err) => {
        res.writeHead(500, { "Content-type": "text/plain" })
        res.end(err.message)
    })
}


module.exports = {getCharById}
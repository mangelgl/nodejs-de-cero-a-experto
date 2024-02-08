// ! Ejercicio petición con Axios
// npm install -D axios
const axios = require('axios')

const httpClientPlugin = {
    /* get: async(url) => {
        const res = await fetch(url)
        return await res.json()        
    } */
    get: async(url) => {
        const { data } = await axios.get(url)
        return data
    }

    // ...
}

module.exports = {
    http: httpClientPlugin,
}
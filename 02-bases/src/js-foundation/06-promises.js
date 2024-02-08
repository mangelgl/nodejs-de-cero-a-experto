// ! Promesas en cadena
/* const getPokemonById = ( id ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    return fetch(url)
        .then( (res) => res.json() )
        .then( (pokemon) => pokemon.name)
} */

// ! la keywork async hace que la función devuelva una promesa
// ! async await
/* const getPokemonById = async ( id ) => {
    // código más fácil de leer
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const res = await fetch(url)
    const pokemon = await res.json()
    
    return pokemon.name
} */

// ! Patrón adaptador HTTP Fetch
const { http } = require('../plugins')

const getPokemonById = async ( id ) => {
    // código más fácil de leer
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url)
    
    return pokemon.name
}

module.exports = getPokemonById
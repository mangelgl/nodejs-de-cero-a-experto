// ! Patrón adaptador HTTP Fetch
import { httpClientPlugin as http } from '../plugins/http-client-plugin'

export const getPokemonById = async ( id: string|number ): Promise<string> => {
    // código más fácil de leer
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const pokemon = await http.get(url)
    
    return pokemon.name
}
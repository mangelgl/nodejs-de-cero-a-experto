// ! Ejercicio petición con Axios
// npm install -D axios
import axios from 'axios'

export const httpClientPlugin = {
    
    get: async(url: string) => {
        const { data } = await axios.get(url)
        return data
    }

    // ...
}
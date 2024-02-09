const getAgePlugin = require('get-age')

export const getAge = (birthdate: string) => {
    if ( !birthdate ) throw new Error('Birthdate is required!')

    return getAgePlugin(birthdate)
}
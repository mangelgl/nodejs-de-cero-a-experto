const { getUserById } = require("./js-foundation/03-callbacks")
const { buildMakePerson } = require('./js-foundation/05-factory')
const { getUUID, getAge } = require('./plugins')
const getPokemonById = require('./js-foundation/06-promises')

/**
 * ! Forma antigua para importar módulos
 * 
 * const templateExports = require ("./js-foundation/01-template")
 * console.log(templateExports.emailTemplate)
*/

/**
 * ! Forma moderna con desestructuración
 */
/* const { emailTemplate } = require ("./js-foundation/01-template")
console.log(emailTemplate) */


/**
 * ! 03 - Callbacks
 */
/* const id = 1
getUserById(id, (error, user) => {
    if (error) {
        throw new Error (error)
    }

    console.log({user})
}) */

/**
 * ! 05 - Factory Functions
 */

/* const makePerson = buildMakePerson({ getUUID, getAge })

const john = buildPerson({ name: 'John Doe', birthdate: '1999-12-08'})

console.log({john}) */

/**
 * ! 06 - Promises
 */
getPokemonById(1)
    .then( (pokemon) => console.log( {pokemon} ) )
    .catch( (err) => console.error(err) )
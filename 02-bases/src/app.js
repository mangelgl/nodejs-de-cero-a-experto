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
/*const { getUserById } = require("./js-foundation/03-callbacks")

const id = 1

getUserById(id, (error, user) => {
    if (error) {
        throw new Error (error)
    }

    console.log({user})
}) */

/**
 * ! 05 - Factory Functions
 */
/* const { buildMakePerson } = require('./js-foundation/05-factory')
const { getUUID, getAge } = require('./plugins')

const makePerson = buildMakePerson({ getUUID, getAge })

const john = buildPerson({ name: 'John Doe', birthdate: '1999-12-08'})

console.log({john}) */

/**
 * ! 06 - Promises
 */
/* const getPokemonById = require('./js-foundation/06-promises')

getPokemonById(1)
    .then( (pokemon) => console.log( {pokemon} ) )
    .catch( (err) => console.error(err) ) */

/**
 * ! Winston Logger
 */
const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')

logger.log('Hola Mundo')
logger.error('Esto es un error')
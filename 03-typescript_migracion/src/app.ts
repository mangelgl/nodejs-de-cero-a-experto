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

import { emailTemplate } from './js-foundation/01-template';
import { SHELL, PWD } from './js-foundation/02-destructuring'
import { getUserById } from './js-foundation/03-callbacks'
import { buildMakePerson } from './js-foundation/05-factory'
import { getAge, getUUID } from './plugins';
import { getPokemonById } from './js-foundation/06-promises'

/**
 * ! Winston Logger
 */
import { buildLogger } from "./plugins/logger.plugin";

const logger = buildLogger('app.js');

/* logger.log('Hola Mundo');
logger.log(emailTemplate);
logger.log(`Directorio: ${PWD} | Shell: ${SHELL}`)

getUserById(2, (err, user) => {
    if (err) throw new Error(err);
    logger.log(user?.name ?? 'Usuario no encontrado');
}); */

const person = buildMakePerson({getAge, getUUID});
const john = person({name: 'John Doe', birthdate: '1999-12-08'});
console.log(john);

getPokemonById('45')
    .then( (pokemon) => logger.log(pokemon) )
    .catch( (error) => {throw new Error(error)} )
    .finally( () => logger.log('Final promesa') )
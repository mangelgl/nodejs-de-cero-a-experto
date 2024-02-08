/**
 * Las Factory Functions están hechas para hacer el código más escalable
 * y propenso a cambios, ya que en lugar de estar buscando una función
 * para cambiarla / actualizarla sólo hará falta hacerlo una vez, 
 * aplicando principios de arquitectura.
 */

/* const { getUUID } = require('../plugins/get-id-plugin');
const { getAge } = require('../plugins/get-age-plugin') */

const buildMakePerson = ({ getUUID, getAge }) => {
    
    return buildPerson = ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name, // esto es redundante
            birthdate, // esta es la forma más común
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson,
}
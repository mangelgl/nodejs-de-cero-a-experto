/**
 * ! Patrones Adaptadores
 * A la hora de trabajar con dependencias de terceros, debemos trabajar
 * con Patrones Adaptadores, una capa adicional para que nuestro código
 * no dependa directamente del código de terceros y sea más fácil de modificar.
 */

const { getUUID } = require('../plugins/get-id-plugin')
const { getAge } = require('../plugins/get-age-plugin')
const { http } = require('../plugins/http-client-plugin')

module.exports = {
    getUUID, 
    getAge,
    http,
}
/**
 * ! Patrones Adaptadores
 * A la hora de trabajar con dependencias de terceros, debemos trabajar
 * con Patrones Adaptadores, una capa adicional para que nuestro código
 * no dependa directamente del código de terceros y sea más fácil de modificar.
 */

export { getUUID } from '../plugins/get-id-plugin'
export { getAge } from '../plugins/get-age-plugin'
export { httpClientPlugin as http } from '../plugins/http-client-plugin'
export { buildLogger } from '../plugins/logger.plugin'

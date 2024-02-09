/**
 * Las Factory Functions están hechas para hacer el código más escalable
 * y propenso a cambios, ya que en lugar de estar buscando una función
 * para cambiarla / actualizarla sólo hará falta hacerlo una vez, 
 * aplicando principios de arquitectura.
 */

/* const { getUUID } = require('../plugins/get-id-plugin');
const { getAge } = require('../plugins/get-age-plugin') */

interface buildMakePersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface personOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: buildMakePersonOptions) => {
    
    return ({ name, birthdate}: personOptions) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}
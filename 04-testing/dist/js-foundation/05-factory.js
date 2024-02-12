"use strict";
/**
 * Las Factory Functions están hechas para hacer el código más escalable
 * y propenso a cambios, ya que en lugar de estar buscando una función
 * para cambiarla / actualizarla sólo hará falta hacerlo una vez,
 * aplicando principios de arquitectura.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;

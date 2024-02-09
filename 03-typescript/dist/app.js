"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.getHeroById)(3);
/**
 * Esta sintaxis moderna de JavaScript puede fallar en navegadores antiguos
 */
console.log(hero?.name ?? 'Héroe no encontrado'); // hero = undefined.name

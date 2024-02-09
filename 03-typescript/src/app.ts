import { getHeroById } from './services/hero.service'

const hero = getHeroById(3)

/**
 * Esta sintaxis moderna de JavaScript puede fallar en navegadores antiguos
 */
console.log(hero?.name ?? 'Héroe no encontrado') // hero = undefined.name

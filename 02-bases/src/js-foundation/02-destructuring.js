/**
 * La desestructuración de objetos es una expresión de JavaScript que permite 
 * desempacar valores de arreglos o propiedades de objetos en distintas variables.
 */

//console.log(process.env)

/**
 * process: proceso que se ejecuta en cualquier aplicación de node
 * Uno de los usos más comunes para las variables de entorno es que se
 * puede obtener información del servidor donde se está ejecutando node.
 */

const { SHELL, PWD } = process.env

console.table({SHELL, PWD})

const paises = ['España','Francia','Italia']

const [ , , italia ] = paises

console.log(italia)
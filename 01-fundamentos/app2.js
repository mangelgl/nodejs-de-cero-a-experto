const fs = require('fs')

const data = fs.readFileSync('README.md', 'utf8')

const words = data.split(' ')

/*
Mi solución
const reactWordCount = words.filter(
    // word => word.toLowerCase() == 'react'
    word => word.toLowerCase().includes('react')
).length
*/

// Solución óptima
const reactWordCount = data.match(/react/gi ?? []).length // ?? [] si no encuentra ninguna ocurrencia devuelve un array vacío

console.log('Palabras:', words.length)
console.log('Palabras react:', reactWordCount)
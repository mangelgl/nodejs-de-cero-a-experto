/**
 * Cada archivo en Node funciona como un módulo, y para usar estas
 * funciones / variables en otros archivos, necesitamos exportarlos
 */
// 

const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
<div>`;

// ! Forma tradicional de exportar
module.exports = {
    emailTemplate
}
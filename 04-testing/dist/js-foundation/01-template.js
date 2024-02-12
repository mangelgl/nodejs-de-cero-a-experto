"use strict";
/**
 * Cada archivo en Node funciona como un módulo, y para usar estas
 * funciones / variables en otros archivos, necesitamos exportarlos
 */
// 
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailTemplate = void 0;
exports.emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Thank you for your order.</p>
    <p>Order ID: {{orderId}}</p>
<div>`;

# 03 - Migrar proyecto de Node a TypeScript

## Instalaciones

1. Instalar TypeScript y tipos de Node, como dependencia de desarrollo
```
npm i -D typescript @types/node
```
2. Inicializar el archivo de configuración de TypeScript
```
npx tsc --init --outDir dist/ --rootDir src
```
3. Instalación de nodemon y ts-node
```
npm install -D ts-node nodemon
```
4. Crear archivo de configuración de Nodemon - nodemon.json
```
{
  "watch": ["src"],
  "ext": ".ts,.js",
  "ignore": [],
  "exec": "npx ts-node ./src/app.ts"
}
```
5. Crear script para ejecutar en desarrollo en el package.json
```
"dev": "nodemon"
"dev": "npx nodemon" // En caso de no querer instalar nodemon
```
6. Instalación de rimraf
```
npm install -D rimraf
```
7. Creamos scripts para desplegar y ejecutar en producción
```
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```

## Configuraciones

1. Cambio de nombre al archivo app.js por app.ts
2. Cambio de extensión a todos los archivos .js por .ts y adaptarlos a TypeScript
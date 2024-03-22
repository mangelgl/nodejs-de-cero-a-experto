# Rest web server

1. ```npm init -y``` para generar el package.json
2. Configurar typescript con Node:
- Instalar TypeScript y demás dependencias: ```npm i -D typescript @types/node ts-node-dev rimraf```
- Inicializar el archivo de configuración de TypeScript: ```npx tsc --init --outDir dist/ --rootDir src```
- Crear scripts
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

## Secciones
1. http ```app.http.ts```
2. http2 ```app.http2.ts```
3. Express ```npm i -D express```

## Generación de certificados ssl
```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt```

## Documentación
- https://web.dev/articles/performance-http2?hl=es-419
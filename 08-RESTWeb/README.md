# Rest web server

## Configuración
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

## Pasos para iniciar la aplicación
1. Generar los módulos de node ```npm i```
2. ```docker compose up -d``` para generar el contenedor de docker con los parámetros establecidos en docker-compose.yml

## Secciones
1. http ```app.http.ts```
2. http2 ```app.http2.ts```
3. express ```app.ts```

## Generación de certificados ssl
```openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt```

## Prisma
- ```npx prisma db pull``` para transformar el esquema de la bd a esquema prisma (prisma/schema.prisma)
- ```npx prisma migrate dev --name init``` migrar el esquema de prisma para crear las tablas en la base de datos

## Documentación
- HTTP/2: https://web.dev/articles/performance-http2?hl=es-419
- Prisma: https://www.prisma.io/
- DTO: https://www.okta.com/identity-101/dto/
- Jest: https://jestjs.io/docs/getting-started
- HTTP Status Codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
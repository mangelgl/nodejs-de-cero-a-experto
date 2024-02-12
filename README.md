# De cero a experto en NodeJS

## Enlaces de interés

- Overview of Blocking vs No-Blocking: https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking
- Understanding Node.js Event Loop: https://www.builder.io/blog/visual-guide-to-nodejs-event-loop
- Event Loop, Timers, and nextTick(): https://nodejs.org/en/guides/event-loop-timers-and-nexttick
- package.json: https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json
- Excluir archivos de test al compilar: https://bobbyhadz.com/blog/typescript-exclude-test-files-from-compilation

## Dependencias

Para instalar las dependencias de un proyecto importado:
```
npm install
```
o su abreviatura:
```
npm i
```
Para instalar paquetes en modo global:
```
npm install <package>
```
Para instalar paquetes en modo desarrollo:
```
npm install -D <package>
```


- uuid: https://www.npmjs.com/package/uuid
- get-age: https://www.npmjs.com/package/get-age
- nodemon: https://www.npmjs.com/package/nodemon
- axios: https://www.npmjs.com/package/axios

## API

- PokeApi: https://pokeapi.co/

## Pasos para usar Node con TypeScript

https://gist.github.com/Klerith/47af527da090043f604b972b22dd4c01

# Configurar SSH

1. Generación de una nueva clave ssh:
```
ssh-keygen -t <algoritmo> -C "your_email@example.com"
```

2. Inicia el agente ssh en segundo plano:
```
eval "$(ssh-agent -s)"
```

3. Agrega tu clave privada al agente ssh:
```
ssh-add ~/.ssh/id_ed25519
```

4. Agrega la clave pública a la cuenta de github:
```
cat ~/.ssh/id_ed25519.pub
```

5. Prueba la conexión:
```
ssh -T git@github.com
```

6. Si está todo correcto, deberá aparecer el siguiente mensaje:
```
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

7. Listo, ya es posible hacer commits y pushes.
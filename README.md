<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## NOTAS
Para ejecutar en pruebas se recomienda seguir los pasos de ejecutar en prod

## Ejecutar en dev  
1. Clonar el repositorio
2. Tener Nest CLI instalado usar version LTS https://nodejs.org/en/ 
```
npm i -g @nestjs/cli
```
3. Tener Docker instalado https://www.docker.com/products/docker-desktop/

4. Ejecutar
```
yarn install
```
5. Levantar la base de datos
```
docker-compose up -d
```

6. Clonar el archivo ```.env.example``` y renombar la copia a ```
.env```

7. Llenar las variables de entorno definidas en el ```.env```

8. Ejecutar la aplicación en dev:
```
yarn start:dev
```
# Ejecutar en produccion
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
## Ver servidor en swagger
http://localhost:3000/app/v1/swagger

## Probar aplicacion
Ejemplo 1 de prueba
En el endpoit de Swagger /menu/extraccion
1. Dar click en 
```
Try it out
```
2. Dar click en 
```
Execute
```
Ejemplo 2 de prueba
En el endpoit de Swagger /supermercado/{deparament}/{category}
1. Dar click en 
```
Try it out
```
2. Escribir en deparament
```
despensa
``` 
3. Escribir en category 
```
enlatados-y-conservas
``` 
4. Dar click en 
```
Execute
```
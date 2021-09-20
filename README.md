# Finx 

App de control de productos y visualización de datos en gráficos.

## Pre-requisitos. &#128209;
Se requiere tener instalado node.js.

https://nodejs.org/es/

## Instalacion. &#128187;

Instalacion de paquetes/dependecias tanto en el frontend como backend.

```bash
npm install
```

## Para comenzar. &#128520; &#128526; &#128076;
```node
# comandos frontend 
npm run dev # inicia servidor de desarrollo.
npm run watch:css # crear archivo main.css de tailwindcss.
npm run build:css # minificar archivo main.css.
npm run build # crear dist del proyecto.


# comandos backend
npm start # inicia servidor en modo de produccion.
npm run dev # inicia servidor en modo de desarrollo.
npm run build # crear dist del proyecto.
```

## Despliegue. &#128230;
Se debe tener en cuenta que se puede tener el backend en un servidor y ser consumido desde un frontend montado en otro servidor debido a que es una api rest.

A partir de aquí puedes hacer build del frontend, colocar dicha carpeta (dist  del frontend, recuerda cambiar el nombre a public y ademas agregar la carpeta "images" dentro de esta misma para los iconos pwa) en la carpeta dist del backend(si no esta, créala) y realizar deploy en servidores como heroku...

O sencillamente hacer deploy del backend y consumirlo desde el frontend en otro servidor como netlify.

## Tecologias / framework usados. &#128295;
* HTML
* CSS
* Tailwind css
* JAVASCRIPT
* Reactjs
* Nodejs
* Express
* Mongodb

## Licencia


Este proyecto está bajo la Licencia [MIT](https://choosealicense.com/licenses/mit/).

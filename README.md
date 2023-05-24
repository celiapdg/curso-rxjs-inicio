# Descripción del repo

Se trata de un repositorio para aprender y practicar RxJS. Principalmente la información procede del curso de Fernando Herrera [ReactiveX - RxJs: De cero hasta los detalles](https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/) con detalles del curso de Jurek Wozniak [RxJS 7 and Observables: Introduction](https://www.udemy.com/course/rxjs-and-observables/?kw=RxJS+7+and+Observables%3A+Introduction) en la parte de Observables y Funciones para crearlos.




## Proyecto inicial - Curso de RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

### Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)



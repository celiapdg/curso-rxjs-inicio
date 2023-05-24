import { interval, timer } from "rxjs";


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('completed')
}



/**
 * interval - emite valor cada x tiempo de 0 a infinito
 * es asíncrono por naturaleza
 */
const interval$ = interval(1000);

console.log('inicio');
interval$.subscribe(observer);
console.log('fin');

/**
 * timer - e,ote im valor después de x tiempo
 */
// const timer$ = timer(2000);
const timer$ = timer(2000, 1000); // creamos un interval que inicia a los 2s


console.log('inicio');
timer$.subscribe(observer);
console.log('fin');


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const obsHoyEn5$ = timer(hoyEn5); // podemos pasar una fecha de emisión


console.log('inicio');
obsHoyEn5$.subscribe(observer);
console.log('fin');
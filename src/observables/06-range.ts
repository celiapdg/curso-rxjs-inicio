import { range, observeOn, asyncScheduler } from "rxjs";

/**
 * range - crea un observable que emite una secuencia de números en base 
 * a un rango. Por defecto son síncronos pero se pueden transformar en 
 * asíncronos usando un asyncScheduler
 */

const src$ = range(10); // valor de inicio por defecto = 0

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');


const src2$ = range(-5, 10).pipe(observeOn(asyncScheduler)); // valor de inicio, valores totales emitidos y transformamos en asíncrono

console.log('inicio');
src2$.subscribe(console.log);
console.log('fin');
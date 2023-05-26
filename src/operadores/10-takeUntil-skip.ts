import { fromEvent, interval, takeUntil, skip } from "rxjs";

/**
 * takeUntil - recibe como argumento otro observable
 * emite los valores hasta que el segundo observable (argumento)
 * emita su primer valor
 * 
 * skip - permite omitir/ignorar x cantidad de emisiones iniciales
 * 
 */

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent<MouseEvent>(boton, 'click').pipe(
    skip(1)
);

counter$.pipe(
    takeUntil(clickBtn$) // con el skip(1) se parará al 2o click
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
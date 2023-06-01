import { throttleTime, distinctUntilChanged, fromEvent, map, asyncScheduler } from "rxjs";


/**
 * throttleTime - cada vez que se emite un valor, cuenta el tiempo
 * indicado e indica todo lo que se emita después, hasta que pase
 * ese tiempo. Después, se podrá repetir el proceso
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    // el evento se emite instantáneamente, luego tiene que pasar 1s
    throttleTime(1000)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // podemos configurarlo para emitir tanto el primero como el último
    throttleTime(5000, asyncScheduler, {
        leading: true, // primer elemento, lo emite al momento y se inicia el contador
        trailing: true, // ultimo elemento, lo emite al pasar el tiempo
    }),
    // (event.target as HTMLInputElement).value
    map(event => (<HTMLInputElement>event.target).value),
    distinctUntilChanged() // evitar emitir de nuevo el valor anterior
).subscribe(console.log);
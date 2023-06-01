import { sampleTime, distinctUntilChanged, fromEvent, map, asyncScheduler } from "rxjs";


/**
 * sampleTime - obtenemos el último valor emitido en un intervalo de tiempo
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    sampleTime(3000),
    map(({ x, y }) => ({ x, y })),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    // podemos configurarlo para emitir tanto el primero como el último
    sampleTime(5000),
    // (event.target as HTMLInputElement).value
    map(event => (<HTMLInputElement>event.target).value),
    distinctUntilChanged() // evitar emitir de nuevo el valor anterior
).subscribe(console.log);
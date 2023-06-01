import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";


/**
 * debounceTime - emite un valor después de que pase el tiempo indicado
 * desde la última emisión, y solo se emite el último. Si antes de que
 * pase este tiempo se emite otro valor, el tiempo se resetea
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    debounceTime(1000)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$.pipe(
    debounceTime(1000),
    // (event.target as HTMLInputElement).value
    map(event => (<HTMLInputElement>event.target).value),
    distinctUntilChanged() // evitar emitir de nuevo el valor anterior
).subscribe(console.log);
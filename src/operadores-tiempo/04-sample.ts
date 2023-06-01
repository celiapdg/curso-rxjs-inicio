import { sample, interval, fromEvent } from "rxjs";


/**
 * sample - obtenemos el último valor emitido por el observable A
 * cuando el observable B emite un valor
 */

const interval$ = interval(300);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$.pipe(
    // solo se emite cuando se hace click, y se ha emitido un valor en el intervalo
    // si se clica demasiado rápido, no da tiempo a que el intervalo emita
    sample(click$),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

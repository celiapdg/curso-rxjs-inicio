import { first, fromEvent, map, tap } from "rxjs";


/**
 * first - toma el primer valor y cancela la emisión (completa)
 * se le puede indicar una condición
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    tap(console.log),
    first(({ clientY }) => clientY <= 300)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});


import { fromEvent, map, takeWhile, tap } from "rxjs";


/**
 * takeWhile - toma valores hasta que se cumpla
 * una condicion y cancela la emisión (completa)
 * con el parámetro inclusive en true podemos añadir el valor que incumple
 */
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 300, true)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
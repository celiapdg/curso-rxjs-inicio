import { of, take } from "rxjs";


/**
 * take - toma un número de valores y cancela la emisión (completa)
 */
const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
    take(3)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
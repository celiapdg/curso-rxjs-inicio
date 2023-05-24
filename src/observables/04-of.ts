import { of } from "rxjs";


/**
 * of - crea una secuencia de observables en base a un listado de elementos
 */
const obsOf$ = of<any>([1, 2], { a: 3, b: 4 }, function () { }, true, Promise.resolve(true));

console.log('Inicio del obs$');
obsOf$.subscribe({
    next: next => console.log('next', next),
    error: null,
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin del obs$');



const obsOfNunmber$ = of<number[]>(...[1, 2], 3, 4, 5);

console.log('Inicio del obs$');
obsOfNunmber$.subscribe({
    next: next => console.log('next', next),
    error: null,
    complete: () => console.log('Terminamos la secuencia')
});
console.log('Fin del obs$');

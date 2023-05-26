import { of, distinct, takeUntil, skip, distinctUntilChanged } from "rxjs";


/**
 * distinct - no deja emitir valores repetidos, que ya fueron emitidos antes
 * o si se le pasa un valor, solo se emiten los distintos
 */
const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 6, 3, 1);


numeros$.pipe(
    distinct() // utiliza el operador de equidad ===
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'A'
    },
    {
        nombre: 'A'
    },
    {
        nombre: 'B'
    },
    {
        nombre: 'V'
    },
    {
        nombre: 'C'
    },
    {
        nombre: 'V'
    },
    {
        nombre: 'A'
    }

]


const personajes$ = of(...personajes);


personajes$.pipe(
    distinct(p => p.nombre) // le indicamos el campo a tener en cuenta
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
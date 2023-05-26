import { of, distinctUntilChanged } from "rxjs";


const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 6, 3, 1);



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


/**
 * distinctUntilChanged - emite valores siempre que la emision anterior 
 * no sea la misma
 */
numeros$.pipe(
    distinctUntilChanged()
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});

personajes$.pipe(
    distinctUntilChanged((anterior, actual) => actual.nombre === anterior.nombre)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
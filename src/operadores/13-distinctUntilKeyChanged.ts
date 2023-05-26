import { of, distinctUntilKeyChanged } from "rxjs";


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
 * distinctUntilKeyChanged - emite valores siempre que la emision anterior 
 * no sea la misma para la propiedad elegida
 */
personajes$.pipe(
    distinctUntilKeyChanged('nombre')
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
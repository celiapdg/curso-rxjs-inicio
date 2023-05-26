import { reduce, scan, from, map } from "rxjs";


/**
 * scan - igual que reduce pero lanza los valores conforme van saliendo
 */
const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

// Reduce - un solo valor al final
from(numeros).pipe(
    reduce(totalAcumulador),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})

// Scan - tantos valores como valores en el array
from(numeros).pipe(
    scan(totalAcumulador),
).subscribe({
    next: val => console.log('scan:', val),
    complete: () => console.log('Complete')
})

// Redux - scan podría ser la base de redux
interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    { id: 'celiapdg', autenticado: false, token: null },
    { id: 'celiapdg', autenticado: true, token: 'ABC' },
    { id: 'celiapdg', autenticado: true, token: 'ABC123' },
];

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 33 })
);

const id$ = state$.pipe(
    map(state => state.id)
);

state$.subscribe(console.log);
id$.subscribe(console.log);
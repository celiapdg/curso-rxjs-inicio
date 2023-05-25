import { range, fromEvent, map, filter, from } from 'rxjs';


// filter - solo permite emitir los que cumplan la condición
range(10, 10).pipe(
    filter((value, i) => {
        console.log('index', i);
        return value % 2 === 1
    }) // dejamos los impares
).subscribe(console.log);

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman',
    },
    {
        tipo: 'heroe',
        nombre: 'Robin',
    },
    {
        tipo: 'villano',
        nombre: 'Joker',
    }
]

from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
).subscribe(console.log);


// CADENAS DE OPERADORES - el orden es importante
const keyupEvent$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter'),
)

keyupEvent$.subscribe(console.log);
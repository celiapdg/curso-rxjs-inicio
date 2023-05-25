import { range, fromEvent, map, pluck, mapTo } from 'rxjs'; // desde la v7.2 se pueden importar operadores directamente de rxjs, no hace falta /operators

/**
 * Pipeable operators - permiten transformar las notificaciones next
 * emitidas por los observables, proporcionar un fallback para errores,
 * iniciar nuevas suscripciones
 *  */


// map
range(1, 5).pipe(
    map<number, number>(val => {
        return val * 10
    })
).subscribe(console.log);


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code)
);

keyupCode$.subscribe(val => console.log('map', val));


// pluck - extraer un valor y que ese sea la nueva emisión
// actualmente está deprecado, se usa map con optional chaining
const keyupPluck$ = keyup$.pipe(
    // pluck('target','baseURL')
    map(event => event?.code?.length)
);

keyupPluck$.subscribe(val => console.log('pluck', val));


// mapTo - transformar en un valor específico.
// deprecado, usar map(() => valor)
const keyupMapTo$ = keyup$.pipe(
    // mapTo('tecla presionada')
    map(() => 'tecla presionada')
);

keyupMapTo$.subscribe(val => console.log('mapTo', val));

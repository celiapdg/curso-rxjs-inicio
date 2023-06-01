import { auditTime, tap, fromEvent, map } from "rxjs";


/**
 * auditTime - obtenemos el último valor emitido en un intervalo de tiempo
 * este intervalo empieza a contar desde que se detecta el valor, pero la 
 * emisión no se produce hasta que pasa el tiempo. Si durante esa ventana de
 * tiempo se emiten más valores, solo se emitirá el último
 */

const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x, y }) => ({ x, y })),
    tap(val => console.log('tap', val)),
    auditTime(2000),
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete'),
});
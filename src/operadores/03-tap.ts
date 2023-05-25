import { range, map, tap } from 'rxjs';


// tap - https://jaywoz.medium.com/information-is-king-tap-how-to-console-log-in-rxjs-7fc09db0ad5a
// cuando se emite, dispara efectos secundarios

const numeros$ = range(1, 5);

numeros$.pipe(
    tap(x => console.log('antes', x)),
    map(val => val * 10),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('Se terminó todo')
    })
).subscribe(val => console.log('subs', val));
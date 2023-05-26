import { interval, reduce, take, tap } from "rxjs";


/**
 * reduce - realiza un cálculo con los valores emitidos por el obsevable
 * pero no los emite hasta que este se completa
 */
const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

interval(500).pipe(
    take(6), // completa el observable después de las veces que indiquemos
    tap(console.log),
    reduce(totalReducer, 4), // el valor inicial por defecto es 0
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
})
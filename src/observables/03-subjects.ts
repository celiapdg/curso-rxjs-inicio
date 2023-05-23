import { Observable, Observer, Subject } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>(subs => {

    const intervalID = setInterval(() => subs.next(Math.random()), 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }

});

/**
 *  1- Casteo múltiple. Muchas suscripciones van a estar sujetas a este mismo observable, y va a servirme para distribuir la misma información a todos los lugares suscritos
 *  2- También es un observer. Maneja next, error y complete.
 *  3- Le podemos mandar un subject, lo podemos mandar como argumento al subscribe. 
 */
/**
 * Cuando la data es producida por el observable, es considerado un Col Observable
 * Cuando la data es producida fuera, sería un Hot Observable
 * El subject nos permite tranformar Cold -> Hot
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// los números que generan ambas suscriptciones son los mismos
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {

    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500);
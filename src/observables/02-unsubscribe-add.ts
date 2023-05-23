import { Observable, Observer } from "rxjs";


const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};


const intervalo$ = new Observable<number>(subscriber => {

    // Crear un contador
    let count = 0;

    setInterval(() => {
        // cada segundo
        subscriber.next(count++)
    }, 1000)

});

const subs1 = intervalo$.subscribe(num => console.log('Num:', num));
const subs2 = intervalo$.subscribe(num => console.log('Num:', num));



setTimeout(() => {
    subs1.unsubscribe()
    subs2.unsubscribe()
    // en el momento de suscribirse, se crea una nueva instancia del observable
    // por eso la cuenta se resetea
    const subs3 = intervalo$.subscribe(num => console.log('Num:', num));
}, 3000)



// ¿Cómo cancelamos el intervalo? Necesitamos una referencia 
// y el return del observable con clearInterval
const intervalo2$ = new Observable<number>(subscriber => {

    // Crear un contador
    let count = 0;

    const interval = setInterval(() => {
        // cada segundo
        subscriber.next(count++)
        console.log("intervalo2", count)
    }, 1000)

    // el complete hace que se ejecute el return
    setTimeout(() => {
        subscriber.complete();
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('Intervalo destruido');
    }

});

const subs1b = intervalo2$.subscribe(observer);
const subs2b = intervalo2$.subscribe(observer);
const subs3b = intervalo2$.subscribe(observer);

// add ya no se puede usar en cadena subs1.add(x).add(y)..., pero es posible así:
subs1b.add(subs2b);
subs2b.add(subs3b);

setTimeout(() => {
    subs1b.unsubscribe() // con desuscribirse de la primera es suficiente

    console.log('Completado timeout')
}, 6000)
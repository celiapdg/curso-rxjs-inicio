import { Observable, Observer } from "rxjs";



// const obs$ = Observable.create(); 
// el observable no hace nada por sí mismo, solo guarda la lógica
const obs$ = new Observable<string>(subs => {

    subs.next('Patata');
    subs.next('Pepino');

    subs.complete();

    // una vez completada, ya no se emite
    subs.next('Patata');
    subs.next('Pepino');

});

// obs$.subscribe(resp => console.log(resp));
// la lógica del observable se ejecuta con la suscripción
obs$.subscribe(console.log);


const obs2$ = new Observable<string>(subs => {

    subs.next('Patata');
    subs.next('Pepino');

    // Forzar un error
    const a = undefined;
    a.nombre = 'Fernando';

    subs.complete();

    // una vez completada, ya no se emite
    subs.next('Patata');
    subs.next('Pepino');

});


obs2$.subscribe({
    next: valor => console.log('next:', valor),
    error: error => console.warn('error:', error),
    complete: () => console.info('completed')
});


// OBSERVER

const observer: Observer<string> = {
    next: value => console.log('siguiente [next]:', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('Completado [obs]')
}

const obs3$ = new Observable<string>(subs => {

    subs.next('Patata');
    subs.next('Pepino');

    // Forzar un error
    const a = undefined;
    a.nombre = 'Fernando';

    subs.complete();

    // una vez completada, ya no se emite
    subs.next('Patata');
    subs.next('Pepino');

});


obs3$.subscribe(observer);


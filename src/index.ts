import { Observable } from "rxjs";



// const obs$ = Observable.create(); 
const obs$ = new Observable<string>(subs => {

    subs.next('Patata');
    subs.next('Pepino');

    subs.complete();

    // una vez completada, ya no se emite
    subs.next('Patata');
    subs.next('Pepino');

});

// obs$.subscribe(resp => console.log(resp));
obs$.subscribe(console.log);










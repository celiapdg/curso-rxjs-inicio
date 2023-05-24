import { fromEvent } from "rxjs";


/** 
 * fromEvent - permite crear observables a partir de un event target
 * fuentes de eventos: DOM, EventEmitter, jQuery
 * automáticamente elimina los eventListeners
 * https://github.com/ReactiveX/rxjs/blob/master/src/internal/observable/fromEvent.ts
 */

// los dos src son observables de tipo Hot
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: val => console.log('next', val)
}

const subs1 = src1$.subscribe(({ x, y }) => {
    console.log(x, y);
});
const subs2 = src2$.subscribe(event => {
    console.log(event.key);
});


setTimeout(() => {
    console.log("Unsubscribe");
    subs1.unsubscribe();
    subs2.unsubscribe();
}, 6000);
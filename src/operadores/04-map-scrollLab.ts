import { fromEvent, map, tap } from "rxjs";


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris urna sem, eleifend ultrices semper et, ullamcorper dictum odio. Aliquam quis dolor nec enim elementum faucibus. Cras fermentum venenatis libero, blandit dictum ligula sodales et. Fusce blandit orci erat, sit amet ullamcorper velit venenatis sed. Pellentesque imperdiet massa sed viverra pharetra. Donec ultricies, nunc ut malesuada faucibus, metus ipsum interdum neque, sed vulputate tortor dolor quis metus. Donec sit amet ultricies nibh, at iaculis sapien. Suspendisse id congue libero. Nulla facilisi.
<br/><br/>
Quisque eu est eget ligula maximus aliquet ac vel nisl. Vivamus scelerisque justo nec molestie vulputate. Cras nec mollis tellus, non varius metus. Curabitur id mi sollicitudin, convallis sem a, efficitur tellus. Integer porttitor tellus nec diam lobortis, a rutrum nisl fermentum. Sed urna leo, blandit quis erat sed, scelerisque tristique arcu. Praesent vitae felis nec eros iaculis accumsan. Proin pharetra mauris vitae diam tristique faucibus a a sem. Vestibulum nec sapien tellus. Sed finibus porttitor libero sed aliquet. Ut sit amet mollis lacus. Morbi mi eros, cursus at diam a, fringilla mattis sapien. Sed consequat justo vitae dolor venenatis imperdiet. Nam vel dolor facilisis, condimentum justo lobortis, malesuada elit. Nullam malesuada non nibh vel ultrices. Donec in odio ornare, consequat lacus quis, dapibus ante.
<br/><br/>
Mauris ut efficitur urna, in consequat massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris mollis id augue non laoreet. Quisque porttitor tempor velit, id porttitor libero aliquam at. Sed vel mauris ac elit tempus lacinia. In dolor lacus, dictum vitae sodales non, gravida eget nisi. Aliquam quis lectus sit amet felis fermentum ultricies. In vehicula urna et elit porttitor consectetur. Donec ut eros eleifend, faucibus diam non, gravida justo. Proin dolor eros, facilisis et leo non, auctor viverra libero. Sed consectetur nibh vel urna laoreet interdum. Mauris vitae eleifend ipsum. Nulla euismod vehicula tortor, eget consectetur libero gravida sit amet. Donec justo mi, dapibus eget pellentesque et, gravida eu purus. Nullam quis enim eleifend, tempus odio ac, auctor urna. Etiam efficitur maximus elementum.
<br/><br/>
Nam cursus magna ac accumsan lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida tellus. Vestibulum ullamcorper faucibus dui, quis feugiat neque. Quisque nec imperdiet lectus, mattis gravida ipsum. Donec id luctus magna. Nunc placerat id enim eu malesuada. Vestibulum in ipsum ullamcorper, posuere neque non, blandit nisi. Fusce mattis fermentum commodo. Proin posuere eros elit, eu rutrum sem congue id. Vivamus eget ligula porta, tincidunt augue nec, fringilla lorem. In hac habitasse platea dictumst. Suspendisse congue tortor eu condimentum hendrerit. Curabitur nisi nibh, pharetra porta sodales quis, tristique sit amet magna.
<br/><br/>
Fusce id quam nisl. Curabitur porttitor tempus ligula eget consectetur. In nec ultrices sapien. Donec vitae arcu eu nibh consectetur fermentum a eget orci. Integer id dictum tortor. Donec nunc nisl, fermentum id sodales ut, laoreet vitae nibh. Donec luctus nibh non augue vestibulum imperdiet. Sed ornare erat at scelerisque ullamcorper. Praesent tincidunt neque felis, quis dictum lectus suscipit sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el cálculo
const calcularPorcentajeScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;


    return 100 * scrollTop / (scrollHeight - clientHeight)
}

// streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(
    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});
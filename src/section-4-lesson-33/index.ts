import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloClick$ = new Observable<MouseEvent>(subscriber => {
    helloButton?.addEventListener('click', (event: any) => subscriber.next(event));
});

export const subscriptionSection4Lesson33 = () => {
    helloClick$.subscribe(event => console.log(`Subscription 1: ${event.type}, ${event.x}, ${event.y}`));
    
    setTimeout(() => {
        console.log('Subscription 2 starts')
        helloClick$.subscribe(event => console.log(`Subscription 2: ${event.type}, ${event.x}, ${event.y}`))
    }, 5000);
}
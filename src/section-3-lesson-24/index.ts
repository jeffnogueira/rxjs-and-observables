import { Observable } from "rxjs";

const observableSection3Lesson24$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout( () => subscriber.next('Charlie'), 2000);
});

export const subscriptionSection3Lesson24 = () => {
    console.log('Before Observable');
    observableSection3Lesson24$.subscribe(value => console.log(value));
    console.log('After Observable');
};

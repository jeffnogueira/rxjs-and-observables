import { Observable } from "rxjs";

const observableSection3Lesson26$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout( () => subscriber.next('Charlie'), 2000);
    subscriber.error(new Error('Failure'));
    subscriber.complete();

    return () => {
        console.log('Teardown');
    }
});

export const subscriptionSection3Lesson26 = () => {
    console.log('Before Observable');
    observableSection3Lesson26$.subscribe({ next: value => console.log(value), error: (value) => console.log(`Error: ${value}`), complete: () => console.log('Completed') });
    console.log('After Observable');
};

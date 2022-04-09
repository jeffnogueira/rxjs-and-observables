import { Observable } from "rxjs";

const observableSection3Lesson25$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    subscriber.next('Ben');
    setTimeout( () => subscriber.next('Charlie'), 2000);
    subscriber.complete();

    return () => {
        console.log('Teardown');
    }
});

export const subscriptionSection3Lesson25 = () => {
    console.log('Before Observable');
    observableSection3Lesson25$.subscribe({ next: value => console.log(value), complete: () => console.log('Completed') });
    console.log('After Observable');
};

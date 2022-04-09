import { Observable } from "rxjs";

const intervalSection3Lesson29$ = new Observable<number>(subscriber => {
    console.log('Observable executed');
    let counter = 1;

    const intervalId = setInterval(() => {
        console.log(`Emitted ${counter}`);
        subscriber.next(counter++);
    }, 2000);

    return () => {
        console.log('Teardown');
        clearInterval(intervalId);
    }
});

export const subscriptionSection3Lesson29 = intervalSection3Lesson29$.subscribe({ 
    next: value => console.log(value), 
    error: (value) => console.log(`Error: ${value}`), 
    complete: () => console.log('Completed') 
});

export const unsubscriptionSection3Lesson29 = () => {
    setTimeout(() => {
        console.log('Unsubscribe');
        subscriptionSection3Lesson29.unsubscribe();
    }, 7000);
};

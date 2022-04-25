import { Observable, interval } from "rxjs";

const interval$ = (value: number) => interval(value);

/* const interval$ = (value: number) => new Observable<number>(subscriber => {
    let counter = 0;

    const timeoutId = setTimeout(() => {
        console.log('Next');
        subscriber.next(counter++);
    }, value);

    return () => clearTimeout(timeoutId);
}); */

const subscription = interval$(2000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});


export const subscriptionSection5Lesson41 = () => {
    subscription;

    setTimeout(() => {
        console.log('Unsubscribe');
        subscription.unsubscribe();
    }, 5000)
}
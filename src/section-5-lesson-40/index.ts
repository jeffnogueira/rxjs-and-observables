import { Observable, timer } from "rxjs";

const timer$ = (value: number) => timer(value);

/* const timer$ = (value: number) => new Observable<number>(subscriber => {
    const timeoutId = setTimeout(() => {
        console.log('Next');
        subscriber.next(0);
        subscriber.complete();
    }, value);

    return () => clearTimeout(timeoutId);
}); */

const subscription = timer$(2000).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});


export const subscriptionSection5Lesson40 = () => {
    subscription;

    setTimeout(() => {
        console.log('Unsubscribe');
        subscription.unsubscribe();
    }, 1000)
}
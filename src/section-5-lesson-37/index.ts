import { Observable, of } from "rxjs";

const names$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
})

export const subscriptionSection5Lesson37 = () => {
    names$.subscribe({
        next: value => console.log(value),
        complete: () => console.log('Completed')
    });
};

const ourOwnOf = (...args: Array<string>): Observable<string> => {
    return new Observable<string>(subscriber => {
        for (const arg of args) {
            subscriber.next(arg);
        }

        subscriber.complete();
    })
}

export const subscriptionSection5Lesson37_2 = () => {

    of('Alice', 'Ben', 'Charlie').subscribe({
        next: value => console.log(value),
        complete: () => console.log('Completed')
    });

    // SAME THING

    /* ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
        next: value => console.log(value),
        complete: () => console.log('Completed')
    }); */
}
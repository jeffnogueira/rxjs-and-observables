import { Observable } from "rxjs";

const observableSection2Lesson10$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
});

export const subscriptionSection2Lesson10 = observableSection2Lesson10$.subscribe((value: any) => console.log(value));

export const unsubscriptionSection2Lesson10 = () => {
    setTimeout(() => {
        console.log('Unsubscribe');
        subscriptionSection2Lesson10.unsubscribe();
    }, 3000);
};

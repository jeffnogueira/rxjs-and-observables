import { Observable } from "rxjs";

const observableSection2Lesson11$ = new Observable<string>(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
    setTimeout(() => subscriber.next('Ben'), 2000);
    setTimeout(() => subscriber.next('Charlie'), 4000);
});

export const subscription1Section2Lesson11 = observableSection2Lesson11$.subscribe((value: any) => console.log(`Subscription 1: ${value}`));

export const subscription2Section2Lesson11 = setTimeout(() => observableSection2Lesson11$.subscribe((value: any) => console.log(`Subscription 2: ${value}`)), 1000);

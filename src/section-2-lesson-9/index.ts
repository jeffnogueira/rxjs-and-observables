import { Observable } from "rxjs";

export const observableSection2Lesson9$ = new Observable(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
});

export const observerSection2Lesson9 = {
    next: (value: any) => console.log(value)
};
import { Observable } from "rxjs";

const observableSection3Lesson23$ = new Observable(subscriber => {
    console.log('Observable executed');
    subscriber.next('Alice');
});

export const subscriptionSection3Lesson23 = () => {
    console.log('Before Observable');
    observableSection3Lesson23$.subscribe(value => console.log(value));
    console.log('After Observable');
};

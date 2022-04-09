import { Observable } from "rxjs";

const observableSection3Lesson22$ = new Observable(subscriber => {
    console.log('Observable executed');
});

export const subscriptionSection3Lesson22 = () => {
    console.log('Before Observable');
    observableSection3Lesson22$.subscribe();
    console.log('After Observable');
};

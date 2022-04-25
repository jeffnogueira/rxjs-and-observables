import { from } from "rxjs";

const somePromise = new Promise((resolve, reject) => {
    resolve('Resolved'),
    reject('Rejected')
})

export const subscriptionSection5Lesson38 = () => {
    from(somePromise).subscribe({
        next: value => console.log(value),
        error: err => console.log(`Error: ${err}`),
        complete: () => console.log('Completed')
    });
};
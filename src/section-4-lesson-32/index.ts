import { ajax } from 'rxjs/ajax';

const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name')

export const subscriptionSection4Lesson32 = () => {
    ajax$.subscribe(data => console.log(`Subscription 1: ${data.response.first_name}`));
    ajax$.subscribe(data => console.log(`Subscription 2: ${data.response.first_name}`));
    ajax$.subscribe(data => console.log(`Subscription 3: ${data.response.first_name}`));
}
import {
  name$,
  storeDataOnServer,
  storeDataOnServerError
} from './external';


export const mainQuickStart = () => {
  name$.subscribe(value => console.log(value));

  storeDataOnServer('Some value').subscribe({
    next: value => console.log(value),
    error: err => console.log('Error when saving:', err.message)
  });

  storeDataOnServerError('Some value').subscribe({
    next: value => console.log(value),
    error: err => console.log('Error when saving:', err.message)
  });
}
  
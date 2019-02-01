import throttle from 'lodash/throttle';
import { saveState } from './localStorageState';
import { store } from './store';

export const configureStore = () => {
  store.subscribe(
    throttle(() => {
      saveState(store.getState());
    }, 1000)
  );
  
  return store;
};
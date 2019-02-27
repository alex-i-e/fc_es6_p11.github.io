import { GeneralStore } from './reducers/index';
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: GeneralStore) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    return JSON.parse(serializedState);
  } catch (err) {
    // Ignore
    return false;
  }
};

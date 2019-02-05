export const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    // eslint-disable-next-line
    console.error('Caught an exception!', err);
    const serializedError = JSON.stringify({
      extra: {
        action,
        state: store.getState(),
        err
      }
    });
    localStorage.setItem('lastStateError', serializedError);
    throw err;
  }
};

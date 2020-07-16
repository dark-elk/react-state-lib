const combineReducers = (reducers: object) => (state: object, action: object) =>
  Object.keys(reducers).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: reducers[prop](acc[prop], action)
    }),
    state
  );

export default combineReducers;

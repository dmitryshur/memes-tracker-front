import visualsReducer from './visuals.js';

test('testing first initiation of the visuals reducer', () => {
  const state = visualsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('testing visuals reducer with the action SET_CHOSEN_SECTION and value newest', () => {
  const initialState = {};
  const newState = {section: 'newest'};

  const action = {
    type: 'SET_CHOSEN_SECTION',
    section: 'newest'
  };
  const state = visualsReducer(initialState, action);
  expect(state).toEqual(newState);
});

test('testing visuals reducer with the action SET_CHOSEN_SECTION and value liked', () => {
  const initialState = {};
  const newState = {section: 'liked'};

  const action = {
    type: 'SET_CHOSEN_SECTION',
    section: 'liked'
  };
  const state = visualsReducer(initialState, action);
  expect(state).toEqual(newState);
});

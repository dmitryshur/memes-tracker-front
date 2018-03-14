import { setChosenSection } from './visuals.js';

test('testing setChosenSection action', () => {
  const setChosenNewest = { type: 'SET_CHOSEN_SECTION', section: 'newest' };
  const setChosenLiked = { type: 'SET_CHOSEN_SECTION', section: 'liked' };
  expect(setChosenSection('newest')).toEqual(setChosenNewest);
  expect(setChosenSection('liked')).toEqual(setChosenLiked);
});

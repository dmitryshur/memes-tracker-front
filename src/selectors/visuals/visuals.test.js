import { getChosenSection } from './visuals.js';

test('test the visuals section selector', () => {
  const state = {visuals: {section: 'newest'}};
  expect(getChosenSection(state)).toBe('newest');
});

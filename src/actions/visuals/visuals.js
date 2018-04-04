const setChosenSection = section => ({
  type: 'SET_CHOSEN_SECTION',
  section,
});

const resetSections = () => ({
  type: 'RESET_CHOSEN_SECTION',
  section: undefined
});

export { setChosenSection, resetSections };

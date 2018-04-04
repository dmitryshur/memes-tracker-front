/**
 * Holds state for the visual aspect of the app.
 * @param {Object} state
 * @param {String} state.section The chosen section. could be either 'newest' or 'liked'
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.section
 * @returns {Object}
 */
const visuals = (state = { section: undefined }, action) => {
  switch (action.type) {
    case 'SET_CHOSEN_SECTION':
      return {
        ...state,
        section: action.section,
      };
    case 'RESET_CHOSEN_SECTION':
      return {
        ...state,
        section: undefined
      };
    default:
      return state;
  }
};

export default visuals;

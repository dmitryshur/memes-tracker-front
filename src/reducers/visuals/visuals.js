const visuals = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHOSEN_SECTION':
      return {
        ...state,
        section: action.section,
      };
    default:
      return state;
  }
};

export default visuals;

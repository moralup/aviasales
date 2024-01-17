const defaultState = {
  tab: 'optimal',
};

export const tabReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_TAB':
      return { ...state, tab: action.payload };
    default:
      return state;
  }
};

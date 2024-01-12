const defaultState = {
  filter: [],
};

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return { ...state, filter: [...state.filter, action.payload] };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filter: state.filter.filter(el => !action.payload.includes(el)),
      };
    case 'ADD_ALL_FILTER':
      return {
        ...state,
        filter: [
          'all',
          'noTransfers',
          'oneTransfer',
          'twoTransfers',
          'threeTransfers',
        ],
      };
    case 'REMOVE_ALL_FILTER':
      return {
        ...state,
        filter: [],
      };

    default:
      return state;
  }
};

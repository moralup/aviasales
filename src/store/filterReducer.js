const defaultState = {
  filters: [],
};

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return { ...state, filters: [...state.filters, action.payload] };
    case 'REMOVE_FILTER':
      return {
        ...state,
        filters: state.filters.filter(el => !action.payload.includes(el)),
      };
    case 'ADD_ALL_FILTER':
      return {
        ...state,
        filters: [
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
        filters: [],
      };

    default:
      return state;
  }
};

const defaultState = {
  searchId: null,
  tickets: [],
  endOfLoading: false,
};
export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_ID':
      return { ...state, searchId: action.payload };
    case 'ADD_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case 'END_OF_LOADING':
      return { ...state, endOfLoading: true };
    default:
      return state;
  }
};

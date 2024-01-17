export const ticketsLengthReducer = (state = { ticketsLength: 10 }, action) => {
  switch (action.type) {
    case 'SHOW_MORE_TICKETS':
      return { ...state, ticketsLength: state.ticketsLength + 10 };
    default:
      return state;
  }
};

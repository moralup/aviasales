export const toggleTab = payload => ({ type: 'TOGGLE_TAB', payload });

export const addFilter = payload => ({ type: 'ADD_FILTER', payload });
export const removeFilter = payload => ({ type: 'REMOVE_FILTER', payload });
export const addAllFilter = () => ({ type: 'ADD_ALL_FILTER' });
export const removeAllFilter = () => ({ type: 'REMOVE_ALL_FILTER' });

export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' });

export const endOfLoading = () => ({ type: 'END_OF_LOADING' });

export const setSearchId = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://aviasales-test-api.kata.academy/search',
      );
      const { searchId } = await response.json();
      dispatch({ type: 'SET_SEARCH_ID', payload: searchId });
    } catch (err) {
      console.log(err);
    }
  };
};
export const addTickets = searchId => {
  const anonym = async dispatch => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
      );
      if (!response.ok) return anonym(dispatch);
      const { tickets, stop } = await response.json();
      dispatch({ type: 'ADD_TICKETS', payload: tickets });
      if (!stop) anonym(dispatch);
      else dispatch({ type: 'END_OF_LOADING' });
    } catch (err) {
      anonym(dispatch);
    }
  };
  return anonym;
};

export const toggleTab = payload => ({ type: 'TOGGLE_TAB', payload });
export const addFilter = payload => ({ type: 'ADD_FILTER', payload });
export const removeFilter = payload => ({ type: 'REMOVE_FILTER', payload });
export const addAllFilter = () => ({ type: 'ADD_ALL_FILTER' });
export const removeAllFilter = () => ({ type: 'REMOVE_ALL_FILTER' });

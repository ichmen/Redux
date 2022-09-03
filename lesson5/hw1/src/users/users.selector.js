import { createSelector } from 'reselect';

export function usersListSelector(state) {
  return state.users.usersList;
}
export function filterTextSelector(state) {
  return state.users.filterText;
}

export const filteredListSelector = createSelector(
  [usersListSelector, filterTextSelector],
  (usersList, filterText) => {
    return usersList.filter(({ name }) => name.toUpperCase().includes(filterText.toUpperCase()));
  },
);

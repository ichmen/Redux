import { createSelector } from 'reselect';

export function optionsListSelector(state) {
  return state.options.optionsList;
}

export function selectedOptionsSelector(state) {
  return state.options.selectedOptions;
}

export const selectedListSelector = createSelector(
  [selectedOptionsSelector, optionsListSelector],
  (optionIds, listAll) => {
    return listAll.filter(({ id }) => optionIds.includes(id));
  },
);

export const availableListSelector = createSelector(
  [selectedOptionsSelector, optionsListSelector],
  (optionIds, listAll) => {
    return listAll.filter(({ id }) => !optionIds.includes(id));
  },
);

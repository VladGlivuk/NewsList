import { Action, action } from 'easy-peasy';
//functions
import { isUserSideRendering } from 'core/functions';
//types
import { FilterLanguage, FilterOption } from 'core/types';
//constants
import { FILTER, LANGUAGE, SEARCH } from 'core/constants';
//helpers
import { getFilterInitialValue, getFilterLanguageInitialValue, getSearchInitialValue } from './helpers';

export interface FiltersModel {
  searchValue: string;
  filterValue: FilterOption;
  filterLanguage: FilterLanguage;
  setNewSearchValue: Action<FiltersModel, string>;
  setNewFilterValue: Action<FiltersModel, FilterOption>;
  setNewFilterLanguage: Action<FiltersModel, FilterLanguage>;
}

const filters: FiltersModel = {
  searchValue: getSearchInitialValue(),
  filterValue: getFilterInitialValue(),
  filterLanguage: getFilterLanguageInitialValue(),

  setNewSearchValue: action((state, payload) => {
    state.searchValue = payload;
    isUserSideRendering() && localStorage.setItem(SEARCH, payload);
  }),

  setNewFilterValue: action((state, payload) => {
    state.filterValue = payload;
    isUserSideRendering() && localStorage.setItem(FILTER, payload);
  }),

  setNewFilterLanguage: action((state, payload) => {
    state.filterLanguage = payload;
    isUserSideRendering() && localStorage.setItem(LANGUAGE, payload);
  }),
};

export default filters;

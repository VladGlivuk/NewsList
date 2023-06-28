import { Action, action } from 'easy-peasy';
//types
import { FilterLanguage, FilterOption } from 'core/types';
//constants
import { EN, TITLE } from 'core/constants';

export interface FiltersModel {
  searchValue: string;
  filterValue: FilterOption;
  filterLanguage: FilterLanguage;
  setNewSearchValue: Action<FiltersModel, string>;
  setNewFilterValue: Action<FiltersModel, FilterOption>;
  setNewFilterLanguage: Action<FiltersModel, FilterLanguage>;
}

const filters: FiltersModel = {
  searchValue: '',
  filterValue: TITLE,
  filterLanguage: EN,

  setNewSearchValue: action((state, payload) => {
    state.searchValue = payload;
  }),

  setNewFilterValue: action((state, payload) => {
    state.filterValue = payload;
  }),

  setNewFilterLanguage: action((state, payload) => {
    state.filterLanguage = payload;
  }),
};

export default filters;

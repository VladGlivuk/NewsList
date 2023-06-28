//functions
import { isUserSideRendering } from 'core/functions';
//types
import { FilterOption } from 'core/types';
//constants
import { FILTER, SEARCH, TITLE } from 'core/constants';

export const getSearchInitialValue = (): string => (isUserSideRendering() && localStorage.getItem(SEARCH)) || '';

export const getFilterInitialValue = (): FilterOption => (isUserSideRendering() && (localStorage.getItem(FILTER) as FilterOption)) || TITLE;

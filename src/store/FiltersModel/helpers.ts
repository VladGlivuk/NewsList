//functions
import { isUserSideRendering } from 'core/functions';
//types
import { FilterLanguage, FilterOption } from 'core/types';
//constants
import { EN, FILTER, LANGUAGE, SEARCH, TITLE } from 'core/constants';

export const getSearchInitialValue = (): string => (isUserSideRendering() && localStorage.getItem(SEARCH)) || '';

export const getFilterInitialValue = (): FilterOption => (isUserSideRendering() && (localStorage.getItem(FILTER) as FilterOption)) || TITLE;

export const getFilterLanguageInitialValue = (): FilterLanguage => (isUserSideRendering() && (localStorage.getItem(LANGUAGE) as FilterLanguage)) || EN;

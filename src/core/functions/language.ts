//functions
import { isUserSideRendering } from './main';
//types
import { FilterLanguage } from 'core/types';
//constants
import { EN, LANGUAGE } from 'core/constants';

export const getFilterLanguageInitialValue = (): FilterLanguage => (isUserSideRendering() && (localStorage.getItem(LANGUAGE) as FilterLanguage)) || EN;

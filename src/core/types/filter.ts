//constants
import { DOMAINS, KEYWORDS, SOURCE, TITLE } from 'core/constants';

export type FilterOption = typeof TITLE | typeof KEYWORDS | typeof SOURCE | typeof DOMAINS;

export type FiltersType = {
  qInTitle: FilterOption;
  q: FilterOption;
  sources: FilterOption;
  domains: FilterOption;
};

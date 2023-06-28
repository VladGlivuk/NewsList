//types
import { FilterOption, FiltersType } from 'core/types';

export const defaultFilterValue = 'qInTitle';

export const TITLE = 'title';
export const KEYWORDS = 'keywords';
export const SOURCE = 'source';
export const DOMAINS = 'domains';

export const filterOptions: Array<FilterOption> = [TITLE, KEYWORDS, SOURCE, DOMAINS];

export const filters: FiltersType = {
  qInTitle: TITLE,
  q: KEYWORDS,
  sources: SOURCE,
  domains: DOMAINS,
};

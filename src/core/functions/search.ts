//types
import { FETCH_NEWS_TYPE } from 'core/types';

export const getSearchNewsFetchType = (searchValue: string): FETCH_NEWS_TYPE => (!!searchValue.length ? FETCH_NEWS_TYPE.ALL : FETCH_NEWS_TYPE.HEADLINES);

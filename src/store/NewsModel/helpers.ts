//types
import { FETCH_NEWS_TYPE } from 'core/types';

export const getSearchNewsFetchType = (searchValue: string) => (!!searchValue.length ? FETCH_NEWS_TYPE.ALL : FETCH_NEWS_TYPE.HEADLINES);

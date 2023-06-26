import { FETCH_NEWS_TYPE } from './../../core/types/news';
import { Action, Thunk, action, thunk } from 'easy-peasy';
//types
import { NewsData } from 'core/types';
//constants
import { newsStateInitialValue } from 'core/constants';
import { fetchNewsList } from 'core/functions';

export interface NewsModel {
  newsList: NewsData;
  addNewsItems: Action<NewsModel, NewsData | null>;
  setFilteredItems: Action<NewsModel, NewsData | null>;
  fetchSearchNews: Thunk<NewsModel, string>;
}

const news: NewsModel = {
  newsList: newsStateInitialValue,

  addNewsItems: action((state, payload) => {
    if (payload) {
      const { data, total } = payload;

      state.newsList.data = [...state?.newsList?.data, ...data];
      state.newsList.total = total;
    }
  }),

  setFilteredItems: action((state, payload) => {
    if (payload) state.newsList = payload;
  }),

  fetchSearchNews: thunk(async (actions, payload) => {
    const newNewsList = await fetchNewsList(FETCH_NEWS_TYPE.EVERYTHING, payload);

    actions.setFilteredItems(newNewsList);
  }),
};

export default news;

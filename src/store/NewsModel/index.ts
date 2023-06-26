import { Action, action } from 'easy-peasy';
//types
import { NewsData } from 'core/types';
//constants
import { newsStateInitialValue } from 'core/constants';

export interface NewsModel {
  newsList: NewsData;
  addNewsItems: Action<NewsModel, NewsData | null>;
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
};

export default news;

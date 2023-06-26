import { AxiosResponse } from 'axios';
//API
import { API } from 'core/API';
//types
import { FETCH_NEWS_TYPE, NewsData, NewsItem, NewsListResponse } from 'core/types';

export const fetchNewsList = async (fetchType = FETCH_NEWS_TYPE.HEADLINES, searchValue?: string): Promise<NewsData | null> => {
  try {
    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(fetchType, { params: { language: 'en', qInTitle: searchValue } });

    if (newsResponse) {
      const newsList: NewsData = {
        data: newsResponse.data.articles,
        total: newsResponse.data.totalResults,
      };

      return newsList;
    }

    return null;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

export const fetchNewsItemByTitle = async (title: string): Promise<NewsItem | null> => {
  try {
    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(`everything?qInTitle=${title}`);

    if (newsResponse) {
      const [targetNews] = newsResponse.data.articles;

      return targetNews;
    }

    return null;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

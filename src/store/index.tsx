import { FC, ReactNode } from 'react';
//easy-peasy
import { StoreProvider, createStore } from 'easy-peasy';
//models
import news, { NewsModel } from './NewsModel';
import filters, { FiltersModel } from './FiltersModel';

export interface StoreModel {
  news: NewsModel;
  filters: FiltersModel;
}

const model: StoreModel = {
  news,
  filters,
};

export const store = createStore(model);

type ProviderProps = {
  children: ReactNode;
};

export const Provider: FC<ProviderProps> = ({ children }) => <StoreProvider store={store}>{children}</StoreProvider>;

export default model;

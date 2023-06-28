import { FC, useState } from 'react';
//hooks
import { useDebounceValue, useEffectNoFirstMount } from 'core/hooks';
import { useStoreActions, useStoreState } from 'store/hooks';
//types
import { FilterLanguage, FilterOption } from 'core/types';
//constants
import { allFilterLanguages, filterOptions } from 'core/constants';
//components
import Input from 'shared/components/Input';
import Select from 'shared/components/Select';

const SearchPanel: FC = () => {
  const defaultSearchValue = useStoreState((store) => store.filters.searchValue);
  const defaultFilterValue = useStoreState((store) => store.filters.filterValue);
  const defaultFilterLanguage = useStoreState((store) => store.filters.filterLanguage);

  const { fetchSearchNews } = useStoreActions((store) => store.news);
  const { setNewSearchValue, setNewFilterValue, setNewFilterLanguage } = useStoreActions((store) => store.filters);

  const [searchValue, setSearchValue] = useState<string>(defaultSearchValue);
  const [filterValue, setFilterValue] = useState<FilterOption>(defaultFilterValue);
  const [filterLanguage, setFilterLanguage] = useState<FilterLanguage>(defaultFilterLanguage);

  const debouncedFilterValue = useDebounceValue(searchValue, 500);

  useEffectNoFirstMount(() => {
    const fetchSearchNewsValues = { searchValue, filterValue, filterLanguage };
    fetchSearchNews(fetchSearchNewsValues);
  }, [debouncedFilterValue, filterValue, filterLanguage]);

  const onSearchInputValueChange = (searchValue: string) => {
    setSearchValue(searchValue);
    setNewSearchValue(searchValue);
  };

  const onFilterSelectChange = (selectValue: string) => {
    setFilterValue(selectValue as FilterOption);
    setNewFilterValue(selectValue as FilterOption);
  };

  const onFilterLanguageChange = (filterLanguage: string) => {
    setFilterLanguage(filterLanguage as FilterLanguage);
    setNewFilterLanguage(filterLanguage as FilterLanguage);
  };

  return (
    <div className='flex justify-center items-center m-4 flex-wrap gap-y-4'>
      <div className='flex justify-center items-center gap-y-4 flex-wrap'>
        <Select options={allFilterLanguages} label='Language: ' onChange={onFilterLanguageChange} />
        <Select options={filterOptions} label='Pick the filter value' onChange={onFilterSelectChange} />
      </div>

      <Input value={searchValue} id='searchInput' onChange={onSearchInputValueChange} placeholder='Enter the search value here' />
    </div>
  );
};

export default SearchPanel;

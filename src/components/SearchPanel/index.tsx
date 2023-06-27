import { FC, useEffect, useState } from 'react';
//hooks
import { useDebounceValue } from 'core/hooks';
import { useStoreActions } from 'store/hooks';
//types
import { FilterLanguage, FilterOption } from 'core/types';
//constants
import { EN, TITLE, allFilterLanguages, filterOptions } from 'core/constants';
//components
import Input from 'shared/components/Input';
import Select from 'shared/components/Select';

const SearchPanel: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<FilterOption>(TITLE);
  const [filterLanguage, setFilterLanguage] = useState<FilterLanguage>(EN);

  const debouncedFilterValue = useDebounceValue(searchValue, 500);

  const fetchSearchNews = useStoreActions((store) => store.news.fetchSearchNews);

  useEffect(() => {
    fetchSearchNews({ searchValue, filterValue, filterLanguage });
  }, [debouncedFilterValue, filterValue, filterLanguage]);

  const onSearchInputValueChange = (searchValue: string) => setSearchValue(searchValue);

  const onFilterSelectChange = (selectValue: string) => setFilterValue(selectValue as FilterOption);

  const onFilterLanguageChange = (filterLanguage: string) => setFilterLanguage(filterLanguage as FilterLanguage);

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

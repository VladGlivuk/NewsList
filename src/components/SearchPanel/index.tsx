import { FC, useEffect, useState } from 'react';
//hooks
import { useDebounceValue } from 'core/hooks';
import { useStoreActions } from 'store/hooks';
//types
import { FilterOption } from 'core/types';
//constants
import { TITLE, filterOptions } from 'core/constants';
//components
import Input from 'shared/components/Input';
import Select from 'shared/components/Select';

const SearchPanel: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<FilterOption>(TITLE);

  const debouncedFilterValue = useDebounceValue(searchValue, 500);

  const fetchSearchNews = useStoreActions((store) => store.news.fetchSearchNews);

  useEffect(() => {
    fetchSearchNews({searchValue, filterValue});
  }, [debouncedFilterValue, filterValue]);

  const onFilterSelectChange = (selectValue: string) => setFilterValue(selectValue as FilterOption);
  const onSearchInputValueChange = (searchValue: string) => setSearchValue(searchValue);

  return (
    <div className='flex justify-center items-center m-4 flex-wrap gap-y-4'>
      <Select options={filterOptions} label='Pick the filter value' onChange={onFilterSelectChange} />

      <Input value={searchValue} id='searchInput' onChange={onSearchInputValueChange} placeholder='Enter the search value here' />
    </div>
  );
};

export default SearchPanel;

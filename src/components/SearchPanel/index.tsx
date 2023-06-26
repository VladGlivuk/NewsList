import { FC, useEffect, useState } from 'react';
//hooks
import { useDebounceValue } from 'core/hooks';
import { useStoreActions } from 'store/hooks';
//components
import Input from 'shared/components/Input';

const SearchPanel: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedFilterValue = useDebounceValue(searchValue, 500);

  const fetchSearchNews = useStoreActions((store) => store.news.fetchSearchNews);

  const onSearchInputValueChange = (value: string) => setSearchValue(value);

  useEffect(() => {
    if (!!searchValue) fetchSearchNews(searchValue);
  }, [debouncedFilterValue]);

  return (
    <div className='flex justify-center items-center m-4'>
      <Input value={searchValue} id={'searchInput'} onChange={onSearchInputValueChange} placeholder='Enter the search value here' />
    </div>
  );
};

export default SearchPanel;

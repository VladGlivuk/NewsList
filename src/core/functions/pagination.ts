//constants
import { defaultPageSize } from 'core/constants';

export const getIsLastPage = (allItemsLength: number, totalItems: number, pageSize = defaultPageSize): boolean => {
  const areLastItems = allItemsLength >= totalItems;
  const areItemsInLastPage = allItemsLength % pageSize !== 0;

  return areLastItems || areItemsInLastPage;
};

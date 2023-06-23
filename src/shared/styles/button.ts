//types
import { ButtonType } from 'core/types';
//constants
import { DEFAULT, TEXT } from 'core/constants';

const defaultButtonStyles =
  'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none text-center border-2';

const textButtonStyles = 'bg-transparent py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none rounded-lg    hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 border-2';

export const buttonVariants: Record<ButtonType, string> = {
  [DEFAULT]: defaultButtonStyles,
  [TEXT]: textButtonStyles,
};

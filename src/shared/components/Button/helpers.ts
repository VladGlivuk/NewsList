//types
import { ButtonType } from 'core/types';
//styles constants
import { buttonVariants } from 'shared/styles';

export const getButtonClassName = (type: ButtonType, parentClassName?: string): string => `${buttonVariants[type]} ${parentClassName && parentClassName}`;

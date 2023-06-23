import { FC } from 'react';
//types
import { ButtonType } from 'core/types';
//constants
import { DEFAULT } from 'core/constants';
//helpers
import { getButtonClassName } from './helpers';

type ButtonProps = {
  title: string;
  clickHandler?: () => void;
  parentClassName?: string;
  type?: ButtonType;
};

const Button: FC<ButtonProps> = ({ title, parentClassName, clickHandler, type = DEFAULT }) => {
  const className = getButtonClassName(type, parentClassName);

  return (
    <button className={className} onClick={clickHandler}>
      {title}
    </button>
  );
};

export default Button;

import { ChangeEvent, FC } from 'react';
//styles
import { defaultLabelStyles } from 'shared/styles';

type SelectProps = {
  options: Array<string>;
  label: string;
  value?: string;
  onChange: (value: string) => void;
};

const Select: FC<SelectProps> = ({ options, label, onChange, value }) => {
  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className='flex justify-center items-center flex-nowrap w-full gap-x-4'>
      <label className={defaultLabelStyles} htmlFor={label}>
        {label}
      </label>

      <select className='rounded-lg text-base h-8 cursor-pointer capitalize' onChange={onChangeHandler} id={label} value={value}>
        {options.map((option, index) => (
          <option className='whitespace-normal text-base' value={option} key={option + index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

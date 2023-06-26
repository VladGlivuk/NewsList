import { ChangeEvent, FC } from 'react';

type InputProps = {
  value: string;
  id: string;
  onChange: (value: string) => void;
  placeholder?: string;
  title?: string;
};

const Input: FC<InputProps> = ({ title, value, id, placeholder, onChange }) => {
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <label className='font-medium text-lg text-gray-800' htmlFor={id}>
        {title}
      </label>

      <input className='font-medium rounded-xl text-lg text-gray-800 w-full p-2' id={id} value={value} onChange={changeHandler} placeholder={placeholder} />
    </div>
  );
};

export default Input;

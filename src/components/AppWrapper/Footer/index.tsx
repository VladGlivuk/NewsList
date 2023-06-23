import { FC } from 'react';
import { useRouter } from 'next/router';
//constants
import { HOME_PAGE, TEXT } from 'core/constants';
//components
import Button from 'shared/components/Button';

const Footer: FC = () => {
  const router = useRouter();

  const goHome = () => {
    router.push(HOME_PAGE);
  };

  return (
    <div className='bg-blue-300 flex justify-evenly items-center gap-2 p-3'>
      <Button type={TEXT} title='Go Home' clickHandler={goHome} />

      <span>News List website for scrolling news always keeps you up to date with what is going on in the world</span>
    </div>
  );
};

export default Footer;

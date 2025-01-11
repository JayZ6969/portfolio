import { FC } from 'react';
import Image from 'next/image';

const classes = {
    Container: 'flex flex-col h-svh items-center justify-center w-screen bg-white z-10',
}

const Featured: FC = () => {
  return (
    <div className={classes.Container}></div>
  );
};

export default Featured;
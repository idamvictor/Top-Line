'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export const Providers = ({ children }: any) => {
  return (
    <>
      {children}
      <ProgressBar
        height='1.5px'
        color='#ffff'
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};


'use client';
import { signIn } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
  return (
    <button
      className='py-2 mt-4 ring-1 text-xl font-medium w-full ring-customWhite rounded-md'
      onClick={() => signIn()}
    >
      Giriş Yap
    </button>
  );
};

export default LoginButton;

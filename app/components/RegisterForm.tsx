'use client';
import React from 'react';

const RegisterForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  };
  return (
    <form
      className='flex text-xl font-medium flex-col gap-2 bg-'
      onSubmit={handleSubmit}
    >
      <h2>Kullanıcı Adı</h2>
      <input
        className='py-1 px-2 bg-customGold rounded-md text-customDarkBlue text-xl font-semibold focus:outline-none'
        id='username'
        name='username'
        type='username'
        required
      />
      <h2>Şifre</h2>
      <input
        className='py-1 px-2 bg-customGold rounded-md text-customDarkBlue text-xl font-semibold focus:outline-none'
        id='password'
        name='password'
        type='password'
        required
      />
      <button
        className='py-2 mt-4 ring-1 ring-customWhite rounded-md'
        type='submit'
      >
        Kaydol
      </button>
    </form>
  );
};

export default RegisterForm;

import React from 'react';
import RegisterForm from '../components/RegisterForm';
import LoginButton from '../components/LoginButton';

const page = () => {
  return (
    <section className='flex min-w-screen min-h-screen md:flex-row justify-center flex-col md:gap-20 gap-10 items-center p-8'>
      <img
        className='w-72 md:w-80'
        src='/assets/images/ytu-logo-beyaz.png'
        alt='ytu-logo'
      />
      <div className='flex flex-col gap-6'>
        <h1 className='text-6xl md:text-7xl font-medium'>
          <span className='text-customGold'>Yıldızlara</span> Katıl
        </h1>
        <RegisterForm />
        <div>
          <h2 className='text-xl font-medium'>Zaten hesabınız var mı?</h2>
          <LoginButton />
        </div>
      </div>
    </section>
  );
};

export default page;

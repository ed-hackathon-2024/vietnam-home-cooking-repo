'use client';

import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginAction } from '@/actions/LoginAction';

const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await loginAction(data);
      alert(result);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Section - Login Form */}
      <div className='flex-1 flex items-center justify-center bg-white px-6'>
        <div className='w-full max-w-md'>
          <h3 className='text-2xl font-semibold text-center mb-8'>Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            {/* Username Input */}
            <Input
              fullWidth
              type='text'
              label='Username'
              error={!!errors.username}
              errorMessage={errors.username?.message}
            />

            {/* Password Input */}
            <Input
              fullWidth
              type='password'
              label='Password'
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />

            {/* Login Button */}
            <Button
              type='submit'
              color='primary'
              fullWidth
              className='bg-erste-blue text-white hover:bg-erste-blue/90 transition'
            >
              Login
            </Button>
          </form>

          {/* Links */}
          <div className='mt-6 text-center text-sm'>
            <a href='/forgot-password' className='text-blue-600 hover:underline'>
              Forgot password?
            </a>
            <p className='mt-2 text-gray-600'>
              New on board?{' '}
              <a href='/register' className='text-blue-600 hover:underline'>
                Join us here!
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Branding */}
      <div className='hidden lg:flex flex-1 items-center justify-center bg-primary'>
        <div className='text-white text-center space-y-4'></div>
      </div>
    </div>
  );
};

export default LoginPage;

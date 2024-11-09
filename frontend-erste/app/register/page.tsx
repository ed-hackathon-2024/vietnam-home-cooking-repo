'use client';

import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerAction } from '@/actions/RegisterAction';

// Zod schema for validation
const registerSchema = z
  .object({
    username: z.string().min(1, 'Username is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormInputs = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      const result = await registerAction(data);
      alert(result);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className='flex min-h-screen'>
      {/* Left Section - Register Form */}
      <div className='flex-1 flex items-center justify-center bg-white px-6'>
        <div className='w-full max-w-md'>
          <h3 className='text-2xl font-semibold text-center mb-8'>Registration</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <Input
              fullWidth
              type='text'
              label='Username'
              error={!!errors.username}
              errorMessage={errors.username?.message}
            />

            {/* Email Input */}
            <Input
              fullWidth
              type='email'
              label='Email'
              error={!!errors.email}
              errorMessage={errors.email?.message}
            />

            <Input
              fullWidth
              type='password'
              label='Password'
              error={!!errors.password}
              errorMessage={errors.password?.message}
            />

            <Input
              fullWidth
              type='password'
              label='Confirm password'
              error={!!errors.confirmPassword}
              errorMessage={errors.confirmPassword?.message}
            />

            <Button
              type='submit'
              color='primary'
              fullWidth
              className='bg-erste-blue text-white hover:bg-erste-blue/90 transition'
            >
              Register
            </Button>
          </form>

          <div className='mt-6 text-center text-sm'>
            <a href='/login' className='text-blue-600 hover:underline'>
              Already have an account? Login here
            </a>
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

export default RegisterPage;

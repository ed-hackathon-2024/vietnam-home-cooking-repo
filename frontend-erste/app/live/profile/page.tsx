'use client';

import Image from 'next/image';

const ProfilePage = () => {
  const user = {
    name: 'John Doe',
    level: 60,
    title: 'Finance Mister',
    avatar: '/path-to-avatar.jpg', // Replace with the actual path to the avatar
    monthlyGoal: 75,
    yearlyGoal: 25,
    badges: [
      '/path-to-badge1.png',
      '/path-to-badge2.png',
      '/path-to-badge3.png',
      '/path-to-badge4.png',
    ],
  };

  return (
    <div className='p-8 bg-gray-50 rounded-lg shadow-xl max-w-4xl mx-auto'>
      {/* Header Section */}
      <div className='flex items-center justify-between mb-8'>
        {/* User Information */}
        <div className='flex items-center gap-6'>
          <div className='relative w-24 h-24'>
            <Image
              src={user.avatar}
              alt='Profile Picture'
              layout='fill'
              className='rounded-full object-cover border-4 border-blue-500'
            />
          </div>
          <div>
            <h1 className='text-2xl font-bold text-blue-600'>{user.name}</h1>
            <p className='text-gray-600'>
              Level: <span className='font-semibold'>{user.level}</span>
            </p>
            <p className='text-gray-600 italic'>{user.title}</p>
          </div>
        </div>

        {/* Badges Section */}
        <div className='bg-blue-100 p-4 rounded-lg shadow-md'>
          <h3 className='text-lg font-bold text-blue-600 mb-2 text-center'>Badges</h3>
          <div className='flex gap-4 justify-center'>
            {user.badges.map((badge, index) => (
              <div key={index} className='w-12 h-12'>
                <Image
                  src={badge}
                  alt={`Badge ${index + 1}`}
                  width={50}
                  height={50}
                  className='rounded-full shadow-md'
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className='grid grid-cols-2 gap-8'>
        {/* Monthly Goal */}
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <h3 className='text-lg font-bold text-blue-600 mb-2'>Monthly Goal</h3>
          <div className='relative w-20 h-20 mx-auto'>
            <svg className='absolute inset-0 w-full h-full text-blue-200' viewBox='0 0 36 36'>
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
                className='text-blue-100'
              ></circle>
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='blue'
                strokeWidth='4'
                strokeDasharray={`${user.monthlyGoal}, 100`}
                strokeLinecap='round'
              ></circle>
            </svg>
            <span className='absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-600'>
              {user.monthlyGoal}%
            </span>
          </div>
        </div>

        {/* Yearly Goal */}
        <div className='bg-white shadow-md rounded-lg p-6 text-center'>
          <h3 className='text-lg font-bold text-blue-600 mb-2'>Yearly Goal</h3>
          <div className='relative w-20 h-20 mx-auto'>
            <svg className='absolute inset-0 w-full h-full text-blue-200' viewBox='0 0 36 36'>
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='currentColor'
                strokeWidth='4'
                className='text-blue-100'
              ></circle>
              <circle
                cx='18'
                cy='18'
                r='16'
                fill='none'
                stroke='blue'
                strokeWidth='4'
                strokeDasharray={`${user.yearlyGoal}, 100`}
                strokeLinecap='round'
              ></circle>
            </svg>
            <span className='absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-600'>
              {user.yearlyGoal}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

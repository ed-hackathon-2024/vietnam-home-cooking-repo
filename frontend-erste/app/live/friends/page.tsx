'use client';

import Image from 'next/image';

const FriendsPage = () => {
  const friends = [
    { name: 'Angie', level: 100, achievements: ['Good Spender', 'Goal Achiever'] },
    { name: 'Chris', level: 80, achievements: ['Budget Buster'] },
  ];

  return (
    <div className='p-8 bg-gray-50 rounded-lg shadow-xl max-w-4xl mx-auto'>
      <h1 className='text-2xl font-bold text-blue-600 text-center mb-8'>Friends</h1>
      <div className='grid gap-6'>
        {friends.map((friend, index) => (
          <div
            key={index}
            className='flex items-center justify-between bg-white shadow-md p-6 rounded-lg'
          >
            {/* Friend Details */}
            <div className='flex items-center gap-4'>
              <div className='relative w-16 h-16'>
                <Image
                  src={`/path-to-avatar-${index}.jpg`} // Replace with actual avatar paths
                  alt={`${friend.name}'s Avatar`}
                  layout='fill'
                  className='rounded-full object-cover border-2 border-gray-300'
                />
              </div>
              <div>
                <h3 className='text-lg font-bold text-gray-800'>{friend.name}</h3>
                <p className='text-gray-500'>
                  Level: <span className='font-semibold'>{friend.level}</span>
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className='flex gap-2'>
              {friend.achievements.map((achievement, achIndex) => (
                <span
                  key={achIndex}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                    achievement === 'Budget Buster'
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {achievement}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;

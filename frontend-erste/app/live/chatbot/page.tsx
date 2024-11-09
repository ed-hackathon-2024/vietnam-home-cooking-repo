'use client';

import Image from 'next/image';

const ChatbotPage = () => {
  const suggestedQuestions = ['How can I save more?', 'Can I spend 50€?', 'Achievements'];

  return (
    <div className='p-8 bg-gray-50 rounded-lg shadow-xl flex flex-col items-center max-w-3xl mx-auto'>
      {/* Chatbot Avatar Section */}
      <div className='relative w-28 h-28 rounded-full flex items-center justify-center bg-blue-100 shadow-md'>
        <Image
          src={'/chatbot-avatar.jpg'} // Replace with your chatbot avatar image
          alt='Chatbot Avatar'
          layout='fill'
          className='rounded-full object-cover'
        />
      </div>

      {/* Suggested Questions */}
      <div className='mt-8 flex flex-wrap gap-4 justify-center'>
        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            className='bg-blue-600 text-white font-medium px-6 py-3 rounded-sm shadow-lg hover:bg-blue-700 transition ease-in-out'
          >
            {question}
          </button>
        ))}
      </div>

      {/* Input Section */}
      <div className='mt-8 w-full'>
        <input
          type='text'
          placeholder='Type your question here...'
          className='w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition'
        />
      </div>
    </div>
  );
};

export default ChatbotPage;

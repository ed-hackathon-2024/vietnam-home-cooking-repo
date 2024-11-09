'use client';

const GoalsPage = () => {
  const goals = [
    {
      label: 'Mesačný cieľ',
      value: 100,
      description: '100 EUR vyššie ako stanovený cieľ',
    },
    {
      label: 'Ročný cieľ',
      value: 80,
      description: '12000 EUR do splnenia cieľa',
    },
  ];

  return (
    <div className='p-6 bg-gray-50 rounded-md shadow-lg'>
      <div className='grid grid-cols-2 gap-6'>
        {goals.map((goal, index) => (
          <div key={index} className='text-center p-4 border rounded-lg shadow-sm bg-white'>
            <h3 className='text-xl font-bold'>{goal.label}</h3>
            <div className='relative flex justify-center items-center mt-4'>
              <div
                className={`w-20 h-20 rounded-full border-4 ${
                  goal.value === 100 ? 'border-green-500' : 'border-blue-500'
                } flex justify-center items-center`}
              >
                <span className='text-lg font-bold'>{goal.value}%</span>
              </div>
            </div>
            <p className='mt-4 text-gray-600'>{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalsPage;

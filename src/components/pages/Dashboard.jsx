import React from 'react';

function Dashboard() {
  return (
    <div className='w-full h-full p-4 ml-[100px] overflow-auto'>
      <ol className='list-decimal list-inside space-y-2'>
        {Array.from({ length: 10 }, (_, index) => (
          <li key={index} className='p-2 bg-gray-100 rounded-md shadow hover:bg-gray-200 transition duration-200'>
            Dashboard Item {index + 1}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Dashboard;

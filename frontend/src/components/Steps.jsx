import React from 'react';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    <div>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works</h1>
      <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p>
      <div>
          {stepsData}
      </div>
    </div>
  );
}

export default Steps;


"use client"
import React from 'react';
import Counter from '../components/Counter';
import { useStoreCart } from '../context/StoreContext';

const CounterPage = () => {
  const { count, increment, decrement, reset } = useStoreCart();

  return (
    <div className='flex flex-col gap-6'>
      <h2>Welcome to the Counter Page use Zustand</h2>
      <Counter />
 
      <div>
      <h2>Counter Page use Context  API</h2>
        <h1>Counter: {count}</h1>
        <div className='flex flex-row gap-4'>
          <button  className='bg-red-500 p-2 rounded-md cursor-pointer' onClick={increment}>Increment</button>
          <button  className='bg-red-500 p-2 rounded-md cursor-pointer' onClick={decrement}>Decrement</button>
          <button  className='bg-red-500 p-2 rounded-md cursor-pointer' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;

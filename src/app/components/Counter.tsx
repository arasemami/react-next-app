// components/Counter.tsx
import React from 'react';
import { useStore } from '../store/useStore';

const Counter = () => {
    const { count, increase, decrease, reset } = useStore();

    return (
        <div>
            <h1>Count: {count}</h1>
            <div className='flex flex-row gap-4'>
                <button className='bg-red-500 p-2 rounded-md cursor-pointer'  onClick={increase}>Increase</button>
                <button  className='bg-red-500 p-2 rounded-md cursor-pointer' onClick={decrease}>Decrease</button>
                <button  className='bg-red-500 p-2 rounded-md cursor-pointer' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;

'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex gap-4 items-center">
      <Button
        type="button"
        text="Decrement"
        className="px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors duration-150 text-white"
        onClick={() => setCounter(counter - 1)}
      />
      <p>{counter}</p>
      <Button
        type="button"
        text="Increment"
        className="px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors duration-150 text-white"
        onClick={() => setCounter(counter + 1)}
      />
    </div>
  );
};

import { Button } from '../ui/button';

export const CounterApp = () => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        type="button"
        text="Increment"
        className="px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors duration-150 text-white"
      />
      <p>1</p>
      <Button
        type="button"
        text="Decrement"
        className="px-4 py-1 rounded-md bg-blue-400 hover:bg-blue-500 transition-colors duration-150 text-white"
      />
    </div>
  );
};

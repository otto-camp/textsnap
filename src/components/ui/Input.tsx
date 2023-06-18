import { Dispatch, SetStateAction } from 'react';

export default function Input({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<File | string | null>>;
}) {
  return (
    <div className='flex'>
      <input
        type='text'
        aria-label='image url'
        onChange={(e) => setImage(e.target.value)}
        placeholder='Enter image url'
        className='flex-1 rounded-lg border-0 px-4 py-1.5 text-gray-900 placeholder:text-gray-800 sm:text-sm sm:leading-6'
      />
    </div>
  );
}

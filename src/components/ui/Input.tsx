interface InputProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  onClick: () => void | Promise<void>;
}

export default function Input({ onChange, onClick }: InputProps) {
  return (
    <div className='flex'>
      <input
        type='text'
        aria-label='image url'
        onChange={(e) => onChange(e.target.value)}
        placeholder='Enter image url'
        className='flex-1 rounded-l-lg border-0 px-4 py-1.5 text-gray-900 placeholder:text-gray-800 sm:text-sm sm:leading-6'
      />
      <button
        onClick={onClick}
        className='inline-flex items-center rounded-r-lg bg-zinc-800 px-6 py-2 text-sm font-semibold text-white shadow-sm duration-200 hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-zinc-700'
      >
        Send
      </button>
    </div>
  );
}

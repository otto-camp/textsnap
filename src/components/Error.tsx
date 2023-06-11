import { useOcrContext } from '@/context/OcrContext';

function Error() {
  const { error } = useOcrContext();
  return (
    <div className='w-full rounded-lg bg-red-700 p-6 text-center font-medium'>
      {error.toString()}
    </div>
  );
}

export default Error;

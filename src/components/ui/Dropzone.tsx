import PhotoIcon from '@heroicons/react/24/solid/PhotoIcon';

interface DropzoneProps {
  // eslint-disable-next-line no-unused-vars
  func: (event?: any) => Promise<void> | void;
}

export default function Dropzone({ func }: DropzoneProps) {
  return (
    <div className='relative flex w-full flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed bg-accent-600/10 p-4 py-8 hover:bg-accent-600/30 hover:transition'>
      <input
        onChange={(e) => func(e)}
        accept='image/*'
        type='file'
        aria-label='image'
        className='absolute inset-0 z-[1] w-full cursor-pointer opacity-0'
      />
      <div className='grid items-center gap-1 text-center'>
        <PhotoIcon />
        <strong>Click to upload a file</strong>
        <span>or drag and drop</span>
        <strong>or paste directly</strong>
      </div>
    </div>
  );
}

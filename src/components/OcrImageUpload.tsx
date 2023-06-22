'use client';
import { useOcrContext } from '@/context/OcrContext';
import Dropzone from './ui/Dropzone';
import { useEffect } from 'react';

export default function OcrImageUpload() {
  const { setError, setImage } = useOcrContext();

  // const sessionImageFile =
  //   typeof window !== 'undefined' && sessionStorage.getItem('imageFile');
  // const sessionImageUrl =
  //   typeof window !== 'undefined' && sessionStorage.getItem('imageUrl');

  useEffect(() => {
    async function pasteOcr(event: ClipboardEvent) {
      const item = event.clipboardData?.items[0];
      if (!item) {
        setError('Last copied item is not an image');
      } else {
        if (item.kind === 'file' && item.type.match('image/*')) {
          const file = item.getAsFile();
          setImage(file);
        }
      }
    }

    document.addEventListener('paste', pasteOcr);
    return () => {
      document.removeEventListener('paste', pasteOcr);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='space-y-4 md:space-y-8'>
      <Dropzone setImage={setImage} />
      {/* <Input setImage={setImageTemp} /> */}
    </div>
  );
}

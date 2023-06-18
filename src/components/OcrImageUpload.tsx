'use client';
import { useOcrContext } from '@/context/OcrContext';
import Dropzone from './ui/Dropzone';
import { createWorker } from 'tesseract.js';
import Button from './ui/Button';
import { useEffect } from 'react';

export default function OcrImageUpload() {
  const { language, setError, setLoading, setImageText, image, setImage } =
    useOcrContext();

  // const sessionImageFile =
  //   typeof window !== 'undefined' && sessionStorage.getItem('imageFile');
  // const sessionImageUrl =
  //   typeof window !== 'undefined' && sessionStorage.getItem('imageUrl');

  async function doOcr() {
    console.time('ocr');
    if (!image) {
      setError('Enter an image');
    } else {
      setLoading(true);
      const worker = await createWorker();
      await worker.loadLanguage(language);
      await worker.initialize(language);

      const {
        data: { text },
      } = await worker.recognize(image);
      setImageText(text);
      setLoading(false);

      await worker.terminate();
    }
    console.timeEnd('ocr');
  }

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
      <Button fullWidth classNames='hover:bg-primary-400' onClick={doOcr}>
        Convert
      </Button>
    </div>
  );
}

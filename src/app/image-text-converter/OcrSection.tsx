'use client';

import OcrImageUpload from '@/components/OcrImageUpload';
import Error from '@/components/Error';
import TextContainer from '@/components/TextContainer';
import { useOcrContext } from '@/context/OcrContext';
import AutoComplete from '@/components/ui/AutoComplete';
import { languages } from '@/constants/Languages';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import ImageFetch from '@/libs/ImageFetch';

export default function OcrSection() {
  const {
    error,
    setLanguage,
    image,
    setError,
    setLoading,
    language,
    setImageText,
  } = useOcrContext();
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL!;

  async function fetchOcr() {
    if (!image) setError('You need to enter an image');

    const formData = new FormData();
    formData.append('image', image as Blob);

    setLoading(true);
    
    console.time('fetch');
    await ImageFetch({
      backend,
      language,
      formData,
      setError,
      setImageText,
      setLoading,
    });
    console.timeEnd('fetch');
  }

  return (
    <div className='container mx-auto min-h-screen'>
      {error ? (
        <div className='container mx-auto mb-8'>
          <Error />
        </div>
      ) : (
        ''
      )}
      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-2'>
        <div className='-mt-2 mb-4 space-y-4 md:space-y-8'>
          <AutoComplete setOption={setLanguage} options={languages} />
          <OcrImageUpload />
          <Button
            fullWidth
            classNames='hover:bg-primary-400'
            onClick={fetchOcr}
          >
            Convert
          </Button>
          {image && (
            <div className='flex flex-wrap gap-2'>
              <Image
                src={window.URL.createObjectURL(image)}
                alt='Uploaded Image'
                width={320}
                height={320}
              />
            </div>
          )}
        </div>
        <div className='py-4'>
          <TextContainer />
        </div>
      </div>
    </div>
  );
}

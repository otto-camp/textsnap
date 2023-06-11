'use client';

import OcrImageUpload from '@/components/OcrImageUpload';
import Error from '@/components/Error';
import TextContainer from '@/components/TextContainer';
import { useOcrContext } from '@/context/OcrContext';
import Image from 'next/image';
import AutoComplete from '@/components/ui/AutoComplete';
import { languages } from '@/constants/Languages';

export default function OcrSection() {
  const { image, error, setLanguage } = useOcrContext();

  return (
    <main className='flex min-h-screen flex-col'>
      <div className='flex-1 p-4'>
        {error ? (
          <div className='container mx-auto mb-8'>
            <Error />
          </div>
        ) : (
          ''
        )}
        <div className='container mx-auto mb-4'>
          <AutoComplete setOption={setLanguage} options={languages} />
        </div>
        <div className='container mx-auto flex flex-col gap-4 lg:flex-row'>
          <div className='w-full space-y-2'>
            <OcrImageUpload />
            {image ? (
              <div className='rounded-lg border'>
                <div className='relative flex min-h-[20rem] w-full flex-col'>
                  <Image
                    src={URL.createObjectURL(image)}
                    alt={image.name}
                    fill
                    className='rounded-t-lg'
                  />
                </div>
                <div className='space-x-4 px-4 py-2'>
                  <span>Image name:</span>
                  <span className=''>{image.name}</span>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
          <TextContainer />
        </div>
      </div>
    </main>
  );
}

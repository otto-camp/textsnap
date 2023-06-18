'use client';

import OcrImageUpload from '@/components/OcrImageUpload';
import Error from '@/components/Error';
import TextContainer from '@/components/TextContainer';
import { useOcrContext } from '@/context/OcrContext';
import AutoComplete from '@/components/ui/AutoComplete';
import { languages } from '@/constants/Languages';
import Image from 'next/image';

export default function OcrSection() {
  const { error, setLanguage, image } = useOcrContext();

  return (
    <main className='container mx-auto min-h-screen'>
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
    </main>
  );
}

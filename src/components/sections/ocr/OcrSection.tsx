'use client';

import OcrImageUpload from '@/components/OcrImageUpload';
import Error from '@/components/Error';
import TextContainer from '@/components/TextContainer';
import { useOcrContext } from '@/context/OcrContext';
import AutoComplete from '@/components/ui/AutoComplete';
import { languages } from '@/constants/Languages';

export default function OcrSection() {
  const { error, setLanguage } = useOcrContext();

  return (
    <main className='flex min-h-screen flex-col'>
      <div className='p-4'>
        {error ? (
          <div className='container mx-auto mb-8'>
            <Error />
          </div>
        ) : (
          ''
        )}
        <div className='mx-auto mb-4 max-w-3xl space-y-4 md:space-y-8'>
          <AutoComplete setOption={setLanguage} options={languages} />
          <OcrImageUpload />
        </div>
        <div className='mx-auto max-w-3xl'>
          <TextContainer />
        </div>
      </div>
    </main>
  );
}

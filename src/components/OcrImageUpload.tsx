'use client';
import { useEffect, useState } from 'react';
import { ImageUpload } from '@/lib/ImageUpload';
import { ImageUrlUpload } from '@/lib/ImageUrlUpload';
import { ImagePaste } from '@/lib/ImagePaste';
import { useOcrContext } from '@/context/OcrContext';
import Dropzone from './ui/Dropzone';
import Input from './ui/Input';

export default function OcrImageUpload() {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const [imageUrl, setImageUrl] = useState('');
  const { language, setError, setLoading, setImageText, setImage } =
    useOcrContext();

  const sessionImageFile =
    typeof window !== 'undefined' && sessionStorage.getItem('imageFile');
  const sessionImageUrl =
    typeof window !== 'undefined' && sessionStorage.getItem('imageUrl');

  function handlePaste(event: ClipboardEvent) {
    ImagePaste({
      event,
      setLoading,
      setImage,
      backend,
      language,
      setImageText,
      setError,
    });
  }
  useEffect(() => {
    if (sessionImageFile) {
      setImageUrl(sessionImageFile);
      if (imageUrl) {
        ImageUrlUpload({
          imageUrl,
          backend,
          language,
          setError,
          setLoading,
          setImageText,
        });
        sessionStorage.removeItem('imageFile');
      }
    }
    if (sessionImageUrl) {
      setImageUrl(sessionImageUrl);
      if (imageUrl) {
        ImageUrlUpload({
          imageUrl,
          backend,
          language,
          setError,
          setLoading,
          setImageText,
        });

        sessionStorage.removeItem('imageUrl');
      }
    }

    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, sessionImageFile, language]);

  return (
    <div className='space-y-4 md:space-y-8'>
      <Dropzone
        func={(e) =>
          ImageUpload({
            e,
            setLoading,
            setImage,
            backend,
            language,
            setError,
            setImageText,
          })
        }
      />
      <Input
        onChange={(e) => setImageUrl(e)}
        onClick={() =>
          ImageUrlUpload({
            imageUrl,
            backend,
            language,
            setError,
            setLoading,
            setImageText,
          })
        }
      />
    </div>
  );
}

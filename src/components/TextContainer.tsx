'use client';

import { useOcrContext } from '@/context/OcrContext';
import { downloadTxt } from '@/utils/downloadTxt';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function TextContainer() {
  const { loading, imageText } = useOcrContext();
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyAlert() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <div className='h-full rounded-lg border-2 p-4'>
      <div className='pb-2'>
        <div className='flex justify-end gap-4'>
          <button
            onClick={() => {
              downloadTxt(imageText, 'textsnap-text');
            }}
            className='cursor-pointer rounded-lg bg-primary-600/70 px-4 py-2 duration-200 hover:bg-primary-900/40'
          >
            Download Text
          </button>
          <CopyToClipboard text={imageText} onCopy={handleCopyAlert}>
            <button className='cursor-pointer rounded-lg bg-primary-600/70 px-4 py-2 duration-200 hover:bg-primary-900/40'>
              {isCopied ? 'Copied' : 'Copy Text'}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className='border-t pt-2'>
        {loading ? (
          <div className='flex h-full w-full items-center justify-center'>
            <svg
              className='-ml-1 mr-3 h-1/2 w-1/2 animate-spin text-white'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
              ></circle>
              <path
                className='opacity-75'
                fill='currentColor'
                d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
              ></path>
            </svg>
          </div>
        ) : (
          <p data-test='text'>{imageText}</p>
        )}
      </div>
    </div>
  );
}

export default TextContainer;

"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function TextContainer({ loading, text }: { loading: boolean; text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyAlert() {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  } 

  return (
    <div className="w-full border-2 rounded-md min-h-[20rem] p-4 lg:max-w-xl lg:ml-auto">
      {isCopied ? (
        <div className="bg-gray-700 text-center p-4 rounded-md">Copied</div>
      ) : (
        ""
      )}
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-1/2 w-1/2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="relative">
          <CopyToClipboard text={text} onCopy={handleCopyAlert}>
            <button aria-label="copy to clipboard" className="absolute -right-3 -top-3 text-base px-2 py-2 text-center whitespace-nowrap inline-flex justify-center items-center space-x-2 hover:brightness-110 transition-all rounded-full active:brightness-90 bg-blue-950">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
            </button>
          </CopyToClipboard>
          <p data-test="text">{text}</p>
        </div>
      )}
    </div>
  );
}

export default TextContainer;

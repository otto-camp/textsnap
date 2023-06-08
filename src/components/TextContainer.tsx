"use client";

import { useOcrContext } from "@/context/OcrContext";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Select from "./ui/Select";

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
    <div className="relative w-full">
      <div className="absolute right-2 top-2">
        <Select trigger="Get Text">
          <CopyToClipboard text={imageText} onCopy={handleCopyAlert}>
            <button className="px-4 py-2 bg-primary-900/70 hover:bg-primary-900/40 duration-200 rounded-lg cursor-pointer w-full">
              Copy Text
            </button>
          </CopyToClipboard>
        </Select>
      </div>
      <div className="w-full border-2 rounded-lg h-full p-4">
        {isCopied ? (
          <div className="bg-gray-700 text-center p-4 rounded-lg">Copied</div>
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
          <p data-test="text">{imageText}</p>
        )}
      </div>
    </div>
  );
}

export default TextContainer;

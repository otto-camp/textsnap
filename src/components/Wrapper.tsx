/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import TextContainer from "./TextContainer";
import Error from "./Error";
import Dropzone from "./Dropzone";
import LanguageRadio from "./LanguageRadio";

function Wrapper() {
  const [imageText, setImageText] = useState("Waiting for your image...");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [language, setLanguage] = useState("eng");

  return (
    <div className="p-4 flex-1">
      <div className="max-w-7xl mx-auto mb-8">
        {error ? <Error error={error} /> : ""}
      </div>
      <div className="max-w-7xl mx-auto flex justify-start gap-4 mb-4">
        <LanguageRadio
          language={language}
          setLanguage={setLanguage}
          label="English"
          value="eng"
        />
        <LanguageRadio
          language={language}
          setLanguage={setLanguage}
          label="Turkish"
          value="tur"
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-2">
          <Dropzone
            setText={setImageText}
            setLoading={setLoading}
            setError={setError}
            setImage={setImage}
            language={language}
          />
          {image ? (
            <div className="flex flex-col w-full border rounded-md">
              <img
                src={URL.createObjectURL(image)}
                alt={image.name}
                className="rounded-t-lg"
              />
              <div className="space-x-4 px-4 py-2 ">
                <span>Image name:</span>
                <span className="">{image.name}</span>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-full">
          <TextContainer loading={loading} text={imageText} />
        </div>
      </div>
    </div>
  );
}

export default Wrapper;

'use client'

import Dropzone from "@/components/Dropzone";
import Error from "@/components/Error";
import LanguageRadio from "@/components/LanguageRadio";
import TextContainer from "@/components/TextContainer";
import Image from "next/image";
import { useState } from "react";


export default function Page() {
  const [imageText, setImageText] = useState("Waiting for your image...");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [language, setLanguage] = useState("eng");

  return (
    <main className="min-h-screen flex flex-col">
     <div className="p-4 flex-1">
      <div className="container mx-auto mb-8">
        {error ? <Error error={error} /> : ""}
      </div>
      <div className="container mx-auto flex justify-start gap-4 mb-4">
        <p className="text-sm">Choose a Language for Image Process:</p>
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
      <div className="container mx-auto flex flex-col lg:flex-row gap-4">
        <div className="w-full space-y-2">
          <Dropzone
            setText={setImageText}
            setLoading={setLoading}
            setError={setError}
            setImage={setImage}
            language={language}
          />
          {image ? (
            <div className="border rounded-md">
              <div className="flex flex-col w-full min-h-[20rem] relative">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  fill
                  className="rounded-t-lg"
                />
              </div>
              <div className="space-x-4 px-4 py-2">
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
    </main>
  );
}
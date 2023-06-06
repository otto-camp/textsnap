"use client";

import Dropzone from "@/components/Dropzone";
import Error from "@/components/Error";
import LanguageRadio from "@/components/LanguageRadio";
import TextContainer from "@/components/TextContainer";
import { useOcrContext } from "@/context/OcrContext";
import Image from "next/image";

export default function OCR() {
  const { image, error } = useOcrContext();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="p-4 flex-1">
        <div className="container mx-auto mb-8">{error ? <Error /> : ""}</div>
        <div className="container mx-auto flex justify-start gap-4 mb-4">
          <p className="text-sm">Choose a Language for Image Process:</p>
          <LanguageRadio label="English" value="eng" />
          <LanguageRadio label="Turkish" value="tur" />
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row gap-4">
          <div className="w-full space-y-2">
            <Dropzone />
            {image ? (
              <div className="border rounded-lg">
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
            <TextContainer />
          </div>
        </div>
      </div>
    </main>
  );
}

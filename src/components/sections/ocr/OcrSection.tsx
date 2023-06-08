"use client";

import OcrImageUpload from "@/components/OcrImageUpload";
import Error from "@/components/Error";
import TextContainer from "@/components/TextContainer";
import { useOcrContext } from "@/context/OcrContext";
import Image from "next/image";
import AutoComplete from "@/components/ui/AutoComplete";

export default function OcrSection() {
  const { image, error, setLanguage } = useOcrContext();

  return (
    <main className="min-h-screen flex flex-col">
      <div className="p-4 flex-1">
        <div className="container mx-auto mb-8">{error ? <Error /> : ""}</div>
        <div className="container mx-auto mb-4">
          <div className="lg:w-1/2">
            <AutoComplete setLanguage={setLanguage} />
          </div>
        </div>
        <div className="container mx-auto flex flex-col lg:flex-row gap-4">
          <div className="w-full space-y-2">
            <OcrImageUpload />
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
          <TextContainer />
        </div>
      </div>
    </main>
  );
}

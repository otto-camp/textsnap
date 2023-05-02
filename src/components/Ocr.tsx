"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Dropzone from "./Dropzone";
import Tesseract from "tesseract.js";
import Image from "next/image";

function Ocr({
  setLoading,
  setText,
  setError,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
}) {
  const [image, setImage] = useState<string | Buffer | null>(null);

  useEffect(() => {
    async function doOCR() {
      if (image == null) {
        setError("");
      } else {
        setLoading(true);
        Tesseract.recognize(image, "eng", {
          logger: (m) => {
            console.log(m);
          },
        }).then(({ data: { text } }) => {
          console.log(text);
          setText(text);
          setLoading(false);
        });
      }
    }
    doOCR();
  }, [image]);

  return (
    <>
      <Dropzone setImage={setImage} />
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image.toString()}
          alt=""
          className="object-cover w-full mt-4"
        />
      ) : (
        " "
      )}
    </>
  );
}

export default Ocr;

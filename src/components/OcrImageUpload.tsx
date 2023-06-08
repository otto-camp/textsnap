"use client";
import { useEffect, useState } from "react";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";
import { ImageUpload } from "@/lib/ImageUpload";
import { ImageUrlUpload } from "@/lib/ImageUrlUpload";
import { ImagePaste } from "@/lib/ImagePaste";
import { useOcrContext } from "@/context/OcrContext";
import Dropzone from "./ui/Dropzone";

export default function OcrImageUpload() {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const [imageUrl, setImageUrl] = useState("");
  const { language, setError, setLoading, setImageText, setImage } =
    useOcrContext();

  const sessionImageFile =
    typeof window !== "undefined" && sessionStorage.getItem("imageFile");
  const sessionImageUrl =
    typeof window !== "undefined" && sessionStorage.getItem("imageUrl");

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
        sessionStorage.removeItem("imageFile");
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

        sessionStorage.removeItem("imageUrl");
      }
    }

    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, sessionImageFile, language]);

  return (
    <div className="space-y-4">
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
      <div className="relative z-50 block w-full">
        <input
          type="text"
          aria-label="image url"
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image url"
          className="w-full rounded-lg border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
        />
        <button
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
          className="absolute -right-1 inset-y-0 inline-flex items-center rounded-lg bg-zinc-800 px-6 py-2 text-sm font-semibold duration-200 text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

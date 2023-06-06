import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function CTADropzone() {
  const [imageUrl, setImageUrl] = useState("");
  const router = useRouter();

  const handleImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageBase64 = e.target?.result as string;
      if (typeof window !== "undefined") {
        sessionStorage.setItem("imageFile", imageBase64);
      }

      router.push("/ocr");
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrl = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("imageUrl", imageUrl);
    }
    router.push("/ocr");
  };

  return (
    <div className="rounded-lg flex-1 border-2 border-dashed p-4 py-8 relative flex flex-col justify-center items-center bg-slate-900 hover:bg-slate-800 hover:transition w-full space-y-4">
      <input
        onChange={(e) => handleImageFile(e)}
        accept="image/*"
        type="file"
        aria-label="image"
        className="w-full absolute inset-0 z-[1] opacity-0 cursor-pointer"
      />
      <div className="grid items-center text-center gap-1">
        <PhotoIcon />
        <strong>Upload a file</strong>
        <span>or drag and drop</span>
      </div>
      <div className="relative z-50 block w-full">
        <input
          type="text"
          aria-label="image url"
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image url"
          className="w-full rounded-lg border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={handleImageUrl}
          className="absolute -right-1 inset-y-0 inline-flex items-center rounded-lg bg-zinc-800 px-6 py-2 text-sm font-semibold duration-200 text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

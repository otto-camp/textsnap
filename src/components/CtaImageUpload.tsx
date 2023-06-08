"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import Button from "./ui/Button";
import Dropzone from "./ui/Dropzone";
import Modal from "./ui/Modal";
import AutoComplete from "./ui/AutoComplete";

export default function CtaImageUpload() {
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
    <div className="flex items-center justify-center container mx-auto p-4">
      <Modal
        triggerChildren={
          <Button
            radius="rounded-l-lg"
            classNames="hover:bg-primary-400 w-[15rem]"
          >
            With Image
          </Button>
        }
        title="With Image"
      >
        <div className="space-y-4 w-full">
          {/* <AutoComplete setLanguage={}/> */}
          <Dropzone func={handleImageFile} />
          <Button
            fullWidth
            radius="rounded-lg"
            onClick={() => router.push("/ocr")}
          >
            Convert with Image
          </Button>
        </div>
      </Modal>
      <Modal
        triggerChildren={
          <Button
            radius="rounded-r-lg"
            classNames="hover:bg-primary-400 w-[15rem]"
          >
            With Url
          </Button>
        }
        title="With Url"
      >
        <div className="w-full flex flex-col gap-4">
          {/* <AutoComplete /> */}
          <div className="relative">
            <input
              type="text"
              aria-label="image url"
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image url"
              className="w-full rounded-lg border-0 py-1.5 px-4 text-text-900 ring-2 ring-inset ring-primary-400 placeholder:text-text-800 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6"
            />
            <button
              onClick={handleImageUrl}
              className="absolute -right-[1px] inset-y-0 inline-flex items-center rounded-lg bg-primary-300 px-6 py-2 text-sm font-semibold duration-200 shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700"
            >
              Send
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

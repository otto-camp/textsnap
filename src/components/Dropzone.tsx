import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";

function Dropzone({
  setImage,
}: {
  setImage: Dispatch<SetStateAction<string | Buffer | null>>;
}) {
  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result as string;
      // console.log({ imageDataUri });
      setImage(imageDataUri);
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    function handlePaste(event: ClipboardEvent) {
      const item = event.clipboardData?.items[0];
      if (!item) {
        return;
      }
      // console.log(item);
      if (item.kind === "file" && item.type.match("image/*")) {
        // console.log("matched");
        const file = item.getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            const str = reader.result as string;
            setImage(str);
          };
        }
      }
    }
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);

  return (
    <div className="rounded-md border-2 border-dashed p-4 py-8 relative flex justify-center items-center bg-slate-900 hover:bg-slate-800 hover:transition min-h-[20rem]">
      <input
        onChange={(e) => handleImageChange(e)}
        accept="image/*"
        type="file"
        aria-label="image"
        className="w-full absolute inset-0 z-[1] opacity-0 cursor-pointer"
      />
      <div className="flex flex-col justify-center items-center text-center gap-1">
        <PhotoIcon />
        <strong>Upload a file</strong>
        or drag and drop
      </div>
    </div>
  );
}

export default Dropzone;

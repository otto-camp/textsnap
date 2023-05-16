import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";

function Dropzone({
  setLoading,
  setText,
  setError,
  setImage,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null>>;
}) {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:5000";

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setImage(file);

    await fetch(backend, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        res.text().then((text) => {
          setText(text);
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    async function handlePaste(event: ClipboardEvent) {
      const item = event.clipboardData?.items[0];
      if (!item) {
        return;
      }
      // console.log(item);
      if (item.kind === "file" && item.type.match("image/*")) {
        // console.log("matched");
        const file = item.getAsFile();
        if (file) {
          const formData = new FormData();
          formData.append("image", file);

          setLoading(true);
          setImage(file);

          await fetch(backend, {
            method: "POST",
            body: formData,
          })
            .then((res) => {
              res.text().then((text) => {
                setText(text);
              });
              setLoading(false);
            })
            .catch((err) => {
              console.error(err);
              setError(err);
              setLoading(false);
            });
        }
      }
    }
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <div className="grid items-center text-center gap-1">
        <PhotoIcon />
        <strong>Upload a file</strong>
        <span>or drag and drop</span>
        <strong>or paste directly</strong>
      </div>
    </div>
  );
}

export default Dropzone;

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import PhotoIcon from "@heroicons/react/24/solid/PhotoIcon";

function Dropzone({
  setLoading,
  setText,
  setError,
  setImage,
  language,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null>>;
  language: string;
}) {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL!;
  const [imageUrl, setImageUrl] = useState("");

  async function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setImage(file);
    console.time("Response Timer");
    await fetch(backend + language + "/image", {
      method: "POST",
      body: formData,
      mode: "cors",
    })
      .then((res) => {
        if (res.status !== 200) {
          setError(
            "Image could not be converted to text. Are you sure the image is valid."
          );
          setLoading(false);
        } else {
          res.text().then((text) => {
            setText(text);
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    console.timeEnd("Response Timer");
  }

  async function handleImageUrlChange(url: string) {
    setLoading(true);
    console.time("Response Timer");
    console.log(imageUrl);

    await fetch(backend + language + "/image-url", {
      method: "POST",
      body: JSON.stringify({ url }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          setError(
            "Image could not be converted to text. Are you sure the image is valid."
          );
          setLoading(false);
        } else {
          res.text().then((text) => {
            setText(text);
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    console.timeEnd("Response Timer");
  }

  useEffect(() => {
    async function handlePaste(event: ClipboardEvent) {
      const item = event.clipboardData?.items[0];
      if (!item) {
        return;
      }
      if (item.kind === "file" && item.type.match("image/*")) {
        const file = item.getAsFile();
        if (file) {
          const formData = new FormData();
          formData.append("image", file);

          setLoading(true);
          setImage(file);

          console.time("Response Timer");
          await fetch(backend + language + "/image", {
            method: "POST",
            body: formData,
            mode: "cors",
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
          console.timeEnd("Response Timer");
        }
      }
    }
    document.addEventListener("paste", handlePaste);
    return () => {
      document.removeEventListener("paste", handlePaste);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div className="rounded-md border-2 border-dashed p-4 py-8 relative flex flex-col justify-center items-center bg-slate-900 hover:bg-slate-800 hover:transition min-h-[20rem] space-y-4">
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
      <div className="relative z-50 block w-full">
        <input
          type="text"
          aria-label="image url"
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image url"
          className="w-full rounded-lg border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-800 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
        />
        <button
          onClick={() => handleImageUrlChange(imageUrl)}
          className="absolute right-0 inset-y-0 inline-flex items-center rounded-md bg-zinc-800 px-6 py-2 text-sm font-semibold duration-200 text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Dropzone;

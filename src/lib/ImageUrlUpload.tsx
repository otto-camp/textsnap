import { Dispatch, SetStateAction } from "react";

export async function ImageUrlUpload({
  imageUrl,
  setLoading,
  backend,
  language,
  setError,
  setText,
}: {
  imageUrl: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  backend: string;
  language: string;
}) {
  console.time("Response Timer");
  setLoading(true);
  const url = imageUrl;

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

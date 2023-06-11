import { ChangeEvent, Dispatch, SetStateAction } from 'react';

export async function ImageUpload({
  e,
  setLoading,
  setImage,
  backend,
  language,
  setError,
  setImageText,
}: {
  e?: ChangeEvent<HTMLInputElement>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setImageText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null>>;
  backend: string;
  language: string;
}) {
  if (!e) {
    return;
  }
  const file = e.target.files![0];
  if (!file) return;
  const formData = new FormData();
  formData.append('image', file);

  setLoading(true);
  setImage(file);
  console.time('Response Timer');
  await fetch(backend + language + '/image', {
    method: 'POST',
    body: formData,
    mode: 'cors',
  })
    .then((res) => {
      if (res.status !== 200) {
        setError(
          'Image could not be converted to text. Are you sure the image is valid.'
        );
        setLoading(false);
      } else {
        res.text().then((text) => {
          setImageText(text);
        });
        setLoading(false);
      }
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
  console.timeEnd('Response Timer');
}

import { Dispatch, SetStateAction } from 'react';

export async function ImagePaste({
  event,
  setLoading,
  setImage,
  backend,
  language,
  setImageText,
  setError,
}: {
  event: ClipboardEvent;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setImageText: Dispatch<SetStateAction<string>>;
  setError: Dispatch<SetStateAction<string>>;
  setImage: Dispatch<SetStateAction<File | null>>;
  backend: string;
  language: string;
}) {
  const item = event.clipboardData?.items[0];
  if (!item) {
    return;
  }

  if (item.kind === 'file' && item.type.match('image/*')) {
    const file = item.getAsFile();
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      setLoading(true);
      setImage(file);
      console.log(language);
      console.time('Response Timer');
      await fetch(backend + language + '/image', {
        method: 'POST',
        body: formData,
        mode: 'cors',
      })
        .then((res) => {
          res.text().then((text) => {
            setImageText(text);
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError(err);
          setLoading(false);
        });
      console.timeEnd('Response Timer');
    }
  }
}

import { Dispatch, SetStateAction } from "react";

interface ImageFetchProps{
  backend:string;
  language:string;
  formData:FormData;
  setError:Dispatch<SetStateAction<string>>
  setImageText:Dispatch<SetStateAction<string>>
  setLoading:Dispatch<SetStateAction<boolean>>
}

export default async function ImageFetch({backend,language,formData,setError,setImageText,setLoading}:ImageFetchProps) {
  await fetch(backend + language + '/image', {
    method: 'POST',
    body: formData,
  })
    .then((res) => {
      if (res.status !== 200) {
        setError(
          'Image could not be converted to text. Are you sure the image is valid.'
        );
      } else {
        res.text().then((text) => {
          setImageText(text);
        });
      }
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}

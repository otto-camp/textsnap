import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

interface OcrContextProps {
  imageText: string;
  setImageText: Dispatch<SetStateAction<string>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  image: File | null;
  setImage: Dispatch<SetStateAction<File | null>>;
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}

const OcrContext = createContext<OcrContextProps | undefined>(undefined);

const OcrProvider = ({ children }: { children: ReactNode }) => {
  const [imageText, setImageText] = useState('Waiting for your image...');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [language, setLanguage] = useState('eng');

  const contextValue: OcrContextProps = {
    imageText,
    setImageText,
    loading,
    setLoading,
    error,
    setError,
    image,
    setImage,
    language,
    setLanguage,
  };

  return (
    <OcrContext.Provider value={contextValue}>{children}</OcrContext.Provider>
  );
};

const useOcrContext = (): OcrContextProps => {
  const context = useContext(OcrContext);
  if (!context) {
    throw new Error('useOcrContext must be used within an OcrProvider');
  }
  return context;
};

export { OcrProvider, useOcrContext };

import { useOcrContext } from '@/context/OcrContext';

export default function LanguageRadio({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const { language, setLanguage } = useOcrContext();
  return (
    <label className='flex items-center justify-center gap-2'>
      <input
        type='radio'
        value={language}
        onChange={() => setLanguage(value)}
        checked={language === value}
      />
      <span>{label}</span>
    </label>
  );
}

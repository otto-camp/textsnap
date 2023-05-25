import { Dispatch, SetStateAction } from "react";

export default function LanguageRadio({
  language,
  setLanguage,
  label,
  value,
}: {
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  label: string;
  value: string;
}) {
  return (
    <label className="flex items-center justify-center gap-2">
      <input
        type="radio"
        value={language}
        onChange={() => setLanguage(value)}
        checked={language === value}
      />
      <span>{label}</span>
    </label>
  );
}

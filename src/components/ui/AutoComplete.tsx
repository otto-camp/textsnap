import { languages } from "@/constants/Languages";
import { Combobox, Transition } from "@headlessui/react";
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from "react";

export default function AutoComplete({
  setLanguage,
}: {
  setLanguage: Dispatch<SetStateAction<string>>;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    Object.values(languages)[17]
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    const val = Object.keys(languages).find(
      //@ts-ignore
      (k) => languages[k] === selectedLanguage
    );
    setLanguage(val as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  const filteredLanguage =
    query === ""
      ? Object.values(languages)
      : Object.values(languages).filter((language) => {
          return language.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <div className="relative w-full">
      <span>Choose a language</span>
      <Combobox value={selectedLanguage} onChange={setSelectedLanguage}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-background-200 border border-background-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="absolute w-full z-[999] overflow-y-auto max-h-60 mt-2 bg-background-200 rounded-lg autocomplete-scrollbar">
            {filteredLanguage.map((language) => (
              <Combobox.Option
                key={language}
                value={language}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 first:rounded-t-lg last:rounded-b-lg pr-4 ${
                    active && "bg-background-300 text-text-100"
                  }`
                }
              >
                {language}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

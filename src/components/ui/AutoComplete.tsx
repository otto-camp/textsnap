import { Combobox, Transition } from '@headlessui/react';
import { ChevronsUpDownIcon } from 'lucide-react';
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react';

type Option = {
  code: string;
  name: string;
};
interface AutoCompleteProps {
  options: Option[];
  setOption: Dispatch<SetStateAction<string>>;
}

export default function AutoComplete({
  options,
  setOption,
}: AutoCompleteProps) {
  const [selected, setSelected] = useState(options[17]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setOption(selected.code);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        );
  return (
    <div className='relative w-full'>
      <span>Choose a language</span>
      <Combobox value={selected} onChange={setSelected}>
        <div className='relative w-full overflow-hidden rounded-lg'>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            displayValue={(option: Option) => option.name}
            className='w-full rounded-lg border border-background-400 bg-background-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500'
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
            <ChevronsUpDownIcon className='text-text-500' aria-hidden='true' />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className='autocomplete-scrollbar absolute z-[999] mt-2 max-h-60 w-full overflow-y-auto rounded-lg bg-background-200'>
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={option.code}
                value={option}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 first:rounded-t-lg last:rounded-b-lg ${
                    active && 'bg-background-300 text-text-100'
                  }`
                }
              >
                {option.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  );
}

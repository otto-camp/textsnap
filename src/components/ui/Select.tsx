import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import React from 'react';

export default function Select({
  children,
  trigger,
}: {
  children: React.ReactNode;
  trigger: string;
}) {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button className='hover:bg-opacity/30 inline-flex w-full justify-center rounded-lg bg-secondary-100/20 px-4 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-opacity-75'>
        {trigger}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-background-400 rounded-lg bg-background-100 shadow-lg ring-1 ring-secondary-100/5 focus:outline-none'>
          <Menu.Item>{children}</Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

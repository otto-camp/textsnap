import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React from 'react';

interface ModalProps {
  triggerChildren: React.ReactNode;
  title: React.ReactNode | string;
  description?: React.ReactNode | string;
  children: React.ReactNode;
}

export default function Modal({
  triggerChildren,
  title,
  description,
  children,
}: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggerChildren}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow' />
        <Dialog.Content className='fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] space-y-4 rounded-lg bg-background-200 p-6 shadow-background-300/10 focus:outline-none data-[state=open]:animate-contentShow'>
          <Dialog.Title className='text-xl font-medium sm:text-2xl'>
            {title}
          </Dialog.Title>
          <Dialog.Description className=''>{description}</Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button
              className='absolute right-3 top-0 rounded-full bg-background-300/70 p-2 duration-200 hover:bg-background-300/40'
              aria-label='Close'
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

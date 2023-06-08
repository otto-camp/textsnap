import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";

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
        <Dialog.Overlay className="bg-black/30 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="space-y-4 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background-200 p-6 shadow-background-300/10 focus:outline-none">
          <Dialog.Title className="font-medium text-xl sm:text-2xl">
            {title}
          </Dialog.Title>
          <Dialog.Description className="">{description}</Dialog.Description>
          {children}
          <Dialog.Close asChild>
            <button
              className="absolute top-0 right-3 rounded-full bg-background-300/70 p-2 hover:bg-background-300/40 duration-200"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

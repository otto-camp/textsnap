'use client';

import useIntersect from '@/hooks/useIntersect';
import { cn } from '@/utils/cn';
import { Disclosure } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const navigation = [
  { name: 'Blog', href: '/blog', cta: false },
  { name: 'Start Converting', href: '/image-text-converter', cta: true },
];

export default function Navigation() {
  const ref = useRef<HTMLElement>(null);
  const isIntersecting = useIntersect({ ref });
  return (
    <Disclosure as='nav' ref={ref}>
      {({ open }) => (
        <div
          className={`fixed inset-x-0 top-0 z-[999] border-b backdrop-blur duration-200 ${
            isIntersecting
              ? 'border-transparent bg-background-100'
              : 'border-background-800/70 bg-background-200/30'
          }`}
        >
          <div className='container relative mx-auto p-4 sm:px-6 lg:px-8'>
            <div className='absolute inset-y-0 right-4 flex items-center sm:hidden'>
              <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 hover:bg-text-400/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-text-400'>
                <span className='sr-only'>Open main menu</span>
                {open ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
              </Disclosure.Button>
            </div>
            <div className='flex w-full items-center justify-center sm:justify-between'>
              <div className='flex flex-shrink-0 items-center'>
                <Link
                  href='/'
                  className='rounded-lg px-4 py-2 text-2xl font-black md:text-3xl'
                >
                  TextSnap
                </Link>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:justify-end'>
                <div className='flex items-center gap-4'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        'rounded-lg text-lg font-medium text-white duration-150 hover:text-text-100',
                        item.cta && 'bg-primary-200 px-4 py-2'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={cn(
                    'block rounded-lg border border-transparent px-3 py-2 font-medium text-white transition-all duration-300 hover:border-white',
                    item.cta && 'bg-primary-200'
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

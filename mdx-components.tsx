import { PropsWithChildren } from 'react';

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: any): any {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }: PropsWithChildren) => (
      <h1 className='mt-2 text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl md:text-center'>
        {children}
      </h1>
    ),
    h2: ({ children }: PropsWithChildren) => (
      <h2 className='text-zinc-50'>{children}</h2>
    ),
    ...components,
  };
}

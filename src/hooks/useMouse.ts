import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

/**
 * This function returns the current position of the mouse on the screen.
 * @returns The `useMousePosition` function returns an object of type `MousePosition`, which contains
 * the current x and y coordinates of the mouse cursor on the screen.
 */
export function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
}

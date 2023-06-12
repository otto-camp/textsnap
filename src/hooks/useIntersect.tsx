import React, { useEffect, useState } from "react";

/**
 * This is a custom React hook that uses the IntersectionObserver API to detect when an element is
 * intersecting with the viewport.
 * @param  - The `useIntersect` function is a custom React hook that takes in an object with a single
 * property `ref`, which is a React ref object that refers to an HTML element. The hook uses the
 * `IntersectionObserver` API to observe the intersection of the referenced element with the viewport
 * and returns a
 * @returns The `useIntersect` hook returns a boolean value `isIntersecting`, which indicates whether
 * the element being observed by the `IntersectionObserver` is currently intersecting with the viewport
 * or not.
 */
export default function useIntersect({
  ref,
}: {
  ref: React.RefObject<HTMLElement>;
}) {
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}
'use client';
import { useEffect } from 'react';
import tocbot from 'tocbot';

export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.js-toc',
      contentSelector: '.js-toc-content',
      headingSelector: 'h2, h3',
    });
    return () => tocbot.destroy();
  }, []);
  return (
    <div>
      <span>Table of Contents</span>
      <div className='js-toc'></div>
    </div>
  );
}

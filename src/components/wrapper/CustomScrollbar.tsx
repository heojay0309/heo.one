'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

interface CustomScrollbarProps {
  children: React.ReactNode;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [startTop, setStartTop] = useState(0);

  useEffect(() => {
    const content = contentRef.current;
    const thumb = thumbRef.current;

    const updateScrollbarThumb = () => {
      if (!content || !thumb) return;

      const contentHeight = content.scrollHeight;
      const containerHeight = content.clientHeight;
      const scrollRatio = containerHeight / contentHeight;
      const thumbHeight = Math.max(scrollRatio * containerHeight, 20);
      const thumbTop = (content.scrollTop / contentHeight) * containerHeight;
      thumb.style.height = `${thumbHeight}px`;
      thumb.style.top = `${thumbTop}px`;
    };

    const handleScroll = () => updateScrollbarThumb();
    content?.addEventListener('scroll', handleScroll);
    updateScrollbarThumb();

    return () => content?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setStartTop(parseInt(window.getComputedStyle(thumbRef.current!).top, 10));
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaY = e.clientY - startY;
        const newTop = Math.min(
          Math.max(startTop + deltaY, 0),
          contentRef.current!.clientHeight - thumbRef.current!.clientHeight
        );
        contentRef.current!.scrollTop =
          (newTop / contentRef.current!.clientHeight) *
          contentRef.current!.scrollHeight;
      }
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startY, startTop]);

  return (
    <div
      className={
        'flex scroll-smooth relative flex-row h-full w-full justify-center gap-[16px] px-[16px]'
      }
    >
      <div className="absolute w-[40px] top-0 tablet:right-[0px] right-[0px] h-full flex flex-col gap-[8px] items-center">
        <Link href={'/'} className="h-10 w-10">
          <Image
            src={'/etc/close.svg'}
            alt={'close'}
            width={40}
            height={40}
            className="hover:opacity-80 active:opacity-60"
          />
        </Link>
        <div className={'customScrollbar flex justify-center h-full'}>
          <div
            ref={thumbRef}
            className={
              'customScrollbarThumb bg-white max-h-[150px] scroll-smooth'
            }
            onMouseDown={handleMouseDown}
          ></div>
        </div>
      </div>

      <div ref={contentRef} className={'content'}>
        {children}
      </div>
    </div>
  );
};

export default CustomScrollbar;

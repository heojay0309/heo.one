'use client';
import Link from 'next/link';
import Image from 'next/image';
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  MouseEventHandler,
} from 'react';
import Card from './Card';

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
      thumb.style.height = `${thumbHeight - 48}px`;
      thumb.style.top = `${thumbTop + 48}px`;
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
    <div className="h-full relative">
      <div ref={contentRef} className="content h-full px-[16px] overflow-auto">
        {children}

        <div
          className={
            'top-[0px] absolute right-[-8px] tablet:right-[-16px] h-full'
          }
        >
          <div
            ref={thumbRef}
            className={'customScrollbarThumb top-[48px] bg-white'}
            onMouseDown={handleMouseDown}
          ></div>
          <Link href={'/'} className="h-10 w-10 absolute top-0 right-[-20px]">
            <Image
              src={'/etc/close.svg'}
              alt={'close'}
              width={40}
              height={40}
              className="hover:opacity-80 active:opacity-60"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollbar;

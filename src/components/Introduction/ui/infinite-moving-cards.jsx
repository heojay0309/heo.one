'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { cn } from '@/utils/cn';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.addEventListener('click', (event) => {
          event.preventDefault();
          const href = item.getAttribute('href');
          const title = item.querySelector('div').textContent;
          router.push(`/projects/${title}`);
        });
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '30s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '45s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '60s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative w-full h-full overflow-hidden rounded-[16px] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-[8px] tablet:gap-[16px] w-max flex-nowrap rounded-[16px]',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <Link
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              router.push(`/projects/${item.title}`);
            }}
            key={idx}
            className="tablet:w-[400px] w-[360px] h-[240px] tablet:h-[320px] group items-center justify-center gap-[8px] bg-[#D9D9D9] bg-opacity-90 hover:bg-opacity-40 transition-all delay-150 rounded-[16px] relative py-[16px] flex flex-col"
          >
            <Image
              src={item.src}
              alt={item.title}
              height={240}
              width={320}
              className="object-contain"
            />
            <div className="opacity-0 h4 group-hover:opacity-80 delay-150 duration-300 transition-opacity text-center">
              {item.title}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return (
    <div className="modal-backdrop">
      <div className="laptop:max-w-[1440px] mx-auto tablet:px-[64px] px-[32px] w-full relative">
        <dialog
          ref={dialogRef}
          className="modal rounded-[12px] relative px-[16px] sm:px-[32px] w-full"
          onClose={onDismiss}
        >
          {children}
          <div className="absolute right-0 top-0 tablet:p-[20px] p-[16px]">
            <button
              onClick={onDismiss}
              className="flex items-center justify-center w-[40px] h-[40px]"
            >
              <Image
                src={'/etc/close.png'}
                height={16}
                width={16}
                alt={'close'}
                className="opacity-40"
              />
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}

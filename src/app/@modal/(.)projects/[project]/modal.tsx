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
      <dialog
        ref={dialogRef}
        className="modal rounded-[12px] relative"
        onClose={onDismiss}
      >
        {children}
        <div className="absolute right-0 top-0 p-[20px]">
          <button
            onClick={onDismiss}
            className="flex items-center justify-center w-[40px] h-[40px]"
          >
            <Image
              src={'/etc/close.png'}
              height={16}
              width={16}
              alt={'close'}
              className="opacity-40 "
            />
          </button>
        </div>
      </dialog>
    </div>
  );
}

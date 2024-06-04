'use client';
import { useState, useEffect, useRef } from 'react';
import NavProjectBox from './NavSection/NavProjectBox';

interface IButton {
  children: React.ReactNode;
  toggle: boolean;
  setToggle: (val:boolean) => void;
}
const Button = ({ children, toggle, setToggle }: IButton) => {

  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setToggle(false);
    }
  };

  useEffect(() => {
    if (toggle) {
      document.addEventListener('click', handleClickOutside as EventListener);
    } else {
      document.removeEventListener(
        'click',
        handleClickOutside as EventListener
      );
    }

    return () => {
      document.removeEventListener(
        'click',
        handleClickOutside as EventListener
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);

  return (
    <div
      ref={buttonRef}
      onClick={() => setToggle(!toggle)}
      className="flex gap-[8px] relative group"
      role="button"
    >
      {children}
    
    </div>
  );
};

export default Button;

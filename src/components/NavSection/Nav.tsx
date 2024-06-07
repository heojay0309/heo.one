import Image from 'next/image';
import Link from 'next/link';
import NavMenu from './NavMenu';
import { IoMdMenu } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="h3 flex justify-between items-center bg-inherit laptop:max-w-[1440px] mx-auto max-h-[64px] w-full fixed tablet:px-[64px] py-[8px] px-[32px] z-10">
      <Link href="/" className="hover:opacity-80 ">
        <span>Jay Heo</span>
      </Link>
      <NavMenu />
    </nav>
  );
};

export default Navbar;

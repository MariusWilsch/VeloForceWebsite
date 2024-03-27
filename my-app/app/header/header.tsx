'use client';
import './header.css'
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/logo-test.png';
import MovingBorderButton from '../components/movingBorderButton';

const Logo = () => (
  <>
    <Link
      href={"/"}
      className="cs-logo"
    >
      <Image
        alt="logo"
        src={LogoImage}
        width={143}
        height={128}
        className='w-auto h-10 sm:h-14'
      />
    </Link>
  </>
);



interface NavItemProps {
  text: string;
  href: string;
  className?: string;
}

const NavItem = ({ text, href, className }: NavItemProps) => (
  <li className={`cs-li ${className}`}>
    <Link href={href} className='cs-li-link underline-on-hover'>
      {text}
    </Link>
  </li>
);



// Header.tsx
const Header = () => (
  <header id="cs-navigation">
    <div className="cs-container">
      <Logo />
      <div className="cs-ul-wrapper">
        <ul
          className="cs-ul"
        >
          <NavItem text="Services" href="/#why-choose-892" className='hidden min-[480px]:block' />
          <NavItem text="About Us" href="/#meet-team-1141" className='hidden min-[480px]:block' />
          <NavItem text="Blog" href="/blog" />
          <MovingBorderButton text='Book a call' />
        </ul>
      </div>
    </div>
  </header>
);

export default Header;


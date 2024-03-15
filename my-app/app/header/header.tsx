'use client';
import './header.css'
import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/logo-test.png';

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
        className='w-auto'
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
          <NavItem text="Services" href="#why-choose-892" className='hidden min-[480px]:block' />
          {/* <NavItem text="Why choose us" href="#whyUs" /> */}
          <NavItem text="About Us" href="#meet-team-1141" className='hidden min-[480px]:block' />
          <NavItem text="Blog" href="/blog" />
          <button className="relative inline-flex h-8 sm:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">

            <span className="absolute inset-[-1000%] animate-[spin_2s_line</button>ar_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Link href="#schedule">Book a call</Link>
            </span>
          </button>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;


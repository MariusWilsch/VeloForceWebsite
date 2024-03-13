import './header.css'

// Logo.tsx
const Logo = () => (
  <a
    aria-label="back to home"
    className="cs-logo"
    href=""
  >
    <img
      alt="logo"
      aria-hidden="true"
      decoding="async"
      height="29"
      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Flogo-black.svg"
      width="210"
    />
  </a>
);

// MobileMenuButton.tsx
const MobileMenuButton = () => (
  <button
    aria-label="mobile menu toggle"
    className="cs-toggle"
  >
    <div
      aria-hidden="true"
      className="cs-box"
    >
      <span
        aria-hidden="true"
        className="cs-line cs-line1"
      />
      <span
        aria-hidden="true"
        className="cs-line cs-line2"
      />
      <span
        aria-hidden="true"
        className="cs-line cs-line3"
      />
    </div>
  </button>
);

interface NavItemProps {
  text: string;
}

const NavItem = ({ text }: NavItemProps) => (
  <li className="cs-li">
    <a
      className="cs-li-link"
      href=""
    >
      {text}
    </a>
  </li>
);

// Navigation.tsx
const Navigation = () => (
  <nav
    className="cs-nav"
    role="navigation"
  >
    <MobileMenuButton />
    <div className="cs-ul-wrapper">
      <ul
        aria-expanded="false"
        className="cs-ul"
        id="cs-expanded"
      >
        <NavItem text="Home" />
        <NavItem text="About" />
        <NavItem text="Services" />
        <NavItem text="About Us" />
        <NavItem text="FAQ" />
      </ul>
    </div>
  </nav>
);

// ShimmerButton.tsx
const ShimmerButton = () => (
  <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Shimmer</button>
);

// Header.tsx
const Header = () => (
  <header id="cs-navigation">
    <div className="cs-container">
      <Logo />
      <Navigation />
      <ShimmerButton />
    </div>
  </header>
);

export default Header;


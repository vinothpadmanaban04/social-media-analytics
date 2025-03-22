import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Instagram, Youtube } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-primary font-medium"
          >
            {/* <BarChart3 className="h-6 w-6" /> */}
            <div className="h-6 w-6">
              <img
                id="logo"
                src="/soc-analyzer.svg"
                alt="Social Analyzer Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight">
              SocAnalyzer
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" current={location.pathname === "/"}>
              Home
            </NavLink>
            <NavLink
              to="/instagram-analytics"
              current={location.pathname === "/instagram-analytics"}
              icon={<Instagram className="h-4 w-4" />}
            >
              Instagram
            </NavLink>
            <NavLink
              to="/youtube-analytics"
              current={location.pathname === "/youtube-analytics"}
              icon={<Youtube className="h-4 w-4" />}
            >
              YouTube
            </NavLink>
          </div>

          <div className="block md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({
  to,
  children,
  current,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  current: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className={`relative group flex items-center space-x-1 px-1 py-2 text-sm font-medium transition-colors ${
        current ? "text-primary" : "text-foreground/80 hover:text-primary"
      }`}
    >
      {icon && icon}
      <span>{children}</span>
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
          current ? "scale-x-100" : ""
        }`}
      />
    </Link>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground"
        aria-label="Toggle menu"
      >
        <div className="w-5 flex flex-col space-y-1">
          <span
            className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`
        fixed inset-0 z-50 glass-dark flex flex-col p-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex justify-end">
          <button
            onClick={toggleMenu}
            className="p-2 text-foreground"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          <MobileNavLink
            to="/"
            current={location.pathname === "/"}
            onClick={toggleMenu}
          >
            Home
          </MobileNavLink>
          <MobileNavLink
            to="/instagram-analytics"
            current={location.pathname === "/instagram-analytics"}
            onClick={toggleMenu}
            icon={<Instagram className="h-5 w-5 mr-2" />}
          >
            Instagram Analytics
          </MobileNavLink>
          <MobileNavLink
            to="/youtube-analytics"
            current={location.pathname === "/youtube-analytics"}
            onClick={toggleMenu}
            icon={<Youtube className="h-5 w-5 mr-2" />}
          >
            YouTube Analytics
          </MobileNavLink>
        </div>
      </div>
    </div>
  );
};

const MobileNavLink = ({
  to,
  children,
  current,
  onClick,
  icon,
}: {
  to: string;
  children: React.ReactNode;
  current: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center text-xl font-medium transition-colors ${
        current ? "text-primary" : "text-foreground/80"
      }`}
    >
      {icon && icon}
      {children}
      <ChevronRight className="ml-2 h-5 w-5 opacity-70" />
    </Link>
  );
};

export default Navbar;

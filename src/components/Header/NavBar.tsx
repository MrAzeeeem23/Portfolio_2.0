import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "../../Assets/Logo.PNG";

const navItems = [
  {
    name: "Projects",
    path: "#ProjectSection",
  },
  {
    name: "About",
    path: "#AboutMe",
  },
  {
    name: "Experience",
    path: "#Experience",
  },
  // {
  //   name: "Blog",
  //   path: "/blog",
  // },
  {
    name: "Contact",
    path: "#ContactSection",
  },
];

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="fixed text-white bg-black h-3 w-full z-40" />
      <nav className="flex w-full fixed justify-between z-40">
        <div className="flex items-start max-w-fit justify-start m-3">
          <Link href="/" aria-label="Home">
            <Image
              src={Logo}
              alt="AzeemLogo"
              className="w-42 h-23 object-contain bg-black rounded-br-4xl absolute inner-curves"
            />
          </Link>
          {/* Pseudo-elements don't render on <img>, so this div draws the inner curves */}
          <div className="w-42 h-23 absolute inner-curves pointer-events-none"></div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 max-w-fit bg-black/40 backdrop-blur-2xl m-6 rounded-full">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="px-5 py-4 text-lg text-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center m-6">
          <button
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            className="px-5 py-2 rounded-full border border-white bg-black/40 backdrop-blur-2xl text-white text-lg transition-all duration-300 hover:bg-white hover:text-black"
          >
            Menu
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 m-3 z-50 flex flex-col bg-black border border-white/20 rounded-4xl px-6 py-6 text-white md:hidden">
            <div className="flex justify-between items-center">
              <p className="uppercase opacity-60 text-lg">Menu</p>
              <button
                onClick={toggleMobileMenu}
                className="px-5 py-2 rounded-full border border-white text-lg transition-all duration-300 hover:bg-white hover:text-black"
              >
                Close
              </button>
            </div>

            <div className="mt-12 border-t border-white">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-baseline gap-4 border-b border-white px-2 py-5 transition-all duration-200 hover:translate-x-2"
                >
                  <span className="opacity-40 text-sm tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-4xl font-semibold">{item.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <a
                href="mailto:azeemkh528@gmail.com"
                className="inline-block border-2 border-white px-4 py-2 text-xl rounded-full transition-all duration-300 hover:bg-white hover:text-black"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        /* Top-left inner curve */
        .inner-curves::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 40px;
          background: radial-gradient(
            circle at bottom right,
            transparent 40px,
            black 40px
          );
          transform: translate(-0px, 40px);
          pointer-events: none;
        }

        /* Bottom-right inner curve */
        .inner-curves::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 40px;
          background: radial-gradient(
            circle at bottom right,
            transparent 40px,
            black 40px
          );
          transform: translate(40px, 0px);
          pointer-events: none;
        }
      `}</style>
    </>
  );
}

export default NavBar;

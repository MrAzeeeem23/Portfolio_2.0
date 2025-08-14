import Link from "next/link";
import React, { useState } from "react";
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
    name: "Blog",
    path: "/blog",
  },
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

  return (
    <>
      <div className="fixed text-white bg-black h-3 w-full z-40" />
      <div className="flex w-full fixed justify-between z-40">
        <div className="flex item-center max-w-fit font-normal justify-start rounded-full m-3">
          <Image
            src={Logo}
            alt="AzeemLogo"
            className="w-42 h-23 object-contain bg-black rounded-br-4xl absolute inner-curves"
          />
          <div className="w-42 h-23 absolute inner-curves"></div>
        </div>
        <div className="hidden md:flex items-center max-w-fit font-normal justify-start bg-white/50 backdrop-blur-2xl py-4 px-4 m-6 rounded-full">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative px-4 text-xl text-white group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-[width] duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center max-w-fit font-normal justify-start py-6 px-4 m-4">
          <button
            onClick={toggleMobileMenu}
            className="px-6 py-2 rounded-full border-3 text-white border-white text-2xl"
          >
            Menu
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 h-[700px] bg-violet-700 backdrop-blur-sm z-50 py-6 px-4 m-3 rounded-4xl md:hidden text-white">
            <div className="flex justify-end">
              <button
                onClick={toggleMobileMenu}
                className="px-6 py-2 rounded-full border-3 text-white border-white text-2xl"
              >
                Close
              </button>
            </div>
            <div className="my-12">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b flex flex-col justify-center px-4"
                >
                  <Link
                    href={item.path}
                    className="text-4xl py-6"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        )}
      </div>

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

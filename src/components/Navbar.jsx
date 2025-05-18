import { Link } from 'react-router-dom';
import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
// import { TiLocationArrow } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi"; // icons for menu toggle

import Button from "./Button";

const navItems = ["Нүүр", "Веб", "Контент", "AI", "Бидний тухай", "Холбоо барих"];

const routeMap = {
  Нүүр: "/",
  Веб: "/Web",
  Контент: "/Content",
  AI: "/ai",
  "Бидний тухай": "/Tuhai",
  "Холбоо барих": "/Holboo",
};

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);  // NEW: mobile menu state
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  const toggleMobileNav = () => {
    setIsMobileNavOpen(prev => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link to="/">
              <img src="/img/logo.jpg" alt="logo" className="w-10 cursor-pointer" />
            </Link>

            {/* Product button only visible on md+ */}
            <Link to="/Holboo" className="hidden md:flex">
              <Button
                id="product-button"
                title="Бүртгүүлэх"
                // rightIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 items-center justify-center gap-1"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={routeMap[item]}
                className="nav-hover-btn"
              >
                {item}
              </Link>
            ))}

            {/* Audio play button */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>

          {/* Mobile: Menu Icon and Audio Button */}
          <div className="flex items-center md:hidden space-x-4">
            {/* Audio button */}
            <button
              onClick={toggleAudioIndicator}
              className="flex items-center space-x-0.5"
              aria-label="Toggle audio"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>

            {/* Menu toggle icon */}
            <button
              onClick={toggleMobileNav}
              className="text-2xl text-white"
              aria-label="Toggle menu"
            >
              {isMobileNavOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation menu dropdown */}
        {isMobileNavOpen && (
          <div className="md:hidden bg-white shadow-md rounded-md mt-2 p-4 absolute left-0 right-0 z-50">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={routeMap[item]}
                className="block py-2 border-b last:border-b-0"
                onClick={() => setIsMobileNavOpen(false)} // close menu on click
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};

export default NavBar;

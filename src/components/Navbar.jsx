import React, { useEffect, useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SKILLS", link: "skills" },
    { name: "PROJECTS", link: "projects" },
    { name: "CONTACT", link: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-300 ${
        sticky
          ? "bg-gradient-to-r from-black to-gray-800 text-white shadow-lg border-b border-gray-700"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold tracking-wider transition-transform duration-300 transform hover:scale-110">
            VENKATESH<span className="text-orange-500">.</span>
          </h4>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center space-x-12`}>
          {menuLinks.map((menu, i) => (
            <Link
              key={i}
              to={menu.link}
              smooth={true}
              duration={500}
              className={`hover:text-orange-500 transition-all duration-300 relative group`}
            >
              {menu.name}
              <span className="block h-0.5 bg-orange-500 absolute bottom-[-5px] left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1qUXS_A0jIsu2ny0lPqhPz0-f4IMW2Thi/view?usp=sharing" // Replace with your resume link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-orange-600 hover:scale-105"
          >
            Resume<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-briefcase-business"
  >
    <path d="M12 12h.01" />
    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M22 13a18.15 18.15 0 0 1-20 0" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] text-3xl md:hidden m-5 transition-colors duration-300 ${
            open ? "text-orange-500" : "text-white"
          }`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon> {/* Change icon */}
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden text-white absolute w-2/3 h-screen px-7 py-2 font-medium bg-black top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          } shadow-lg`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-orange-500 transition-colors duration-300 relative group"
              >
                <Link to={menu.link} smooth={true} duration={500}>
                  {menu.name}
                </Link>
                <span className="block h-0.5 bg-orange-500 absolute bottom-[-5px] left-0 right-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </li>
            ))}
          
            <li>
              <a
                href="/path/to/your/resume.pdf" // Replace with your resume link
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center text-sm font-semibold text-white bg-orange-500 rounded-md shadow-md transition-transform duration-300 hover:bg-orange-600 hover:scale-105"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

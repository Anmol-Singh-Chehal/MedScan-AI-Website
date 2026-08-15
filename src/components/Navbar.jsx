import React from 'react'
import { Sun, BriefcaseMedical, Moon } from "lucide-react";
import { Button } from '@base-ui/react';
import { LuHouse, LuMenu, LuPhone, LuScanSearch, LuUsers, LuX } from 'react-icons/lu';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const {theme, setTheme} = useTheme();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <nav className='flex justify-between sm:px-4 sm:py-4 lg:py-0 lg:px-8 xl:px-12 shadow-[0_2px_12px_rgba(0,0,0,0.12)] fixed top-0 left-0 w-full backdrop-blur-3xl backdrop-saturate-50 z-50'>
      
      <NavLink to={"/"} className='flex sm:gap-1 justify-center items-center cursor-pointer'>
        <BriefcaseMedical className='text-muted sm:size-6'/>
        <h1 className='text-muted sm:text-lg font-semibold'>MedScan AI</h1>
      </NavLink>

      <ul className='hidden lg:flex md:gap-8'>
        <li className='font-medium border-b-4 border-muted text-muted py-4 cursor-pointer hover:border-muted/30'>Home</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>About Us</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>Detection</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>Contact Us</li>
      </ul>

      <div className='flex sm:gap-2 items-center justify-center'>
        <button className='sm:size-7 lg:size-8 hover:bg-muted/10 ring-1 rounded-full flex items-center justify-center hover:cursor-pointer text-muted'> 
          {theme === "dark" ? (
            <Sun
              className="sm:size-6 lg:size-5 text-muted cursor-pointer"
              onClick={() => setTheme("light")}
            />
          ) : (
            <Moon
              className="sm:size-6 lg:size-5 text-muted cursor-pointer"
              onClick={() => setTheme("dark")}
            />
          )}
        </button>
        <Button className={`btn-2 sm:hidden md:flex ${theme=="dark" && "hover:ring-muted hover:text-paper-1"}`}>Login</Button>
        <Button className={`btn-1 ${theme==="light"? "text-white": "text-paper-1"}`} onClick={()=>navigate("/sign-up")}>Sign Up</Button>

        <LuMenu
          className="
            size-8 md:size-9 lg:hidden
            p-1
            rounded-full
            text-primary
            hover:text-muted
            hover:bg-muted/10
            transition-all duration-200
            cursor-pointer
          "
          onClick={toggleMenu}
        />

      </div>



      <div
        ref={navRef}
        className={`
          fixed right-0 top-0
          h-screen w-3/5
          z-50
          ${theme==="light" ? "bg-[#EAF7F5]/95" : "bg-paper-1"}
          backdrop-blur-2xl
          backdrop-saturate-150

          border-l border-muted/20
          shadow-[-10px_0_35px_color-mix(in_srgb,var(--color-muted)_15%,transparent)]

          transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-3 py-3">

          <NavLink to={"/"} className="flex items-center gap-2 curosr-pointer" onClick={()=>toggleMenu()}>
            <div
              className="
                size-8
                flex items-center justify-center
                rounded-xl
                bg-muted/15
                ring-1 ring-muted/20
              "
            >
              <BriefcaseMedical className="size-4 text-muted" />
            </div>

            <h1 className="text-[16px] font-semibold font-primary text-muted">
              MedScan AI
            </h1>
          </NavLink>

          <button
            onClick={toggleMenu}
            className="
              size-9
              flex items-center justify-center
              rounded-full
              text-primary
              hover:bg-muted/10
              hover:text-muted
              transition-all duration-200
              cursor-pointer
            "
          >
            <LuX className="size-6" />
          </button>

        </div>

        <div className="mx-3 h-px bg-muted/20" />

        <div className="flex flex-col px-3 py-5">

          <NavLink to={"/"}
            onClick={toggleMenu}
            className="
              group
              flex items-center gap-3
              rounded-xl
              px-3 py-3
              text-primary
              font-medium
              font-primary
              transition-all duration-200
              hover:bg-muted/20
              hover:text-muted
              hover:shadow-[0_4px_15px_color-mix(in_srgb,var(--color-muted)_8%,transparent)]
              cursor-pointer
            "
          >
            <LuHouse
              className="
                size-5
                text-muted
                transition-transform duration-200
                group-hover:scale-110
              "
            />

            Home
          </NavLink>

          <NavLink to={"/detection"}
            onClick={toggleMenu}
            className="
              group
              flex items-center gap-3
              rounded-xl
              px-3 py-3
              text-primary
              font-medium
              font-primary
              transition-all duration-200
              hover:bg-muted/20
              hover:text-muted
              hover:shadow-[0_4px_15px_color-mix(in_srgb,var(--color-muted)_8%,transparent)]
              cursor-pointer
            "
          >
            <LuScanSearch
              className="
                size-5
                text-muted
                transition-transform duration-200
                group-hover:scale-110
              "
            />

            Detection
          </NavLink>

          <NavLink  to={"/about-us"}
            onClick={toggleMenu}
            className="
              group
              flex items-center gap-3
              rounded-xl
              px-3 py-3
              text-primary
              font-medium
              font-primary
              transition-all duration-200
              hover:bg-muted/20
              hover:text-muted
              hover:shadow-[0_4px_15px_color-mix(in_srgb,var(--color-muted)_8%,transparent)]
              cursor-pointer
            "
          >
            <LuUsers
              className="
                size-5
                text-muted
                transition-transform duration-200
                group-hover:scale-110
              "
            />

            About Us
          </NavLink>

          <NavLink to={"/contact-us"}
            onClick={toggleMenu}
            className="
              group
              flex items-center gap-3
              rounded-xl
              px-3 py-3
              text-primary
              font-medium
              font-primary
              transition-all duration-200
              hover:bg-muted/20
              hover:text-muted
              hover:shadow-[0_4px_15px_color-mix(in_srgb,var(--color-muted)_8%,transparent)]
              cursor-pointer
            "
          >
            <LuPhone
              className="
                size-5
                text-muted
                transition-transform duration-200
                group-hover:scale-110
              "
            />

            Contact Us
          </NavLink>

        </div>
      </div>

    </nav>
  )
}

import React from 'react'
import { Sun, BriefcaseMedical } from "lucide-react";
import { Button } from '@base-ui/react';

export default function Navbar() {
  return (
    <nav className='flex justify-between sm:px-4 sm:py-4 lg:py-0 lg:px-8 xl:px-12 shadow-[0_2px_12px_rgba(0,0,0,0.12)] '>
      
      <div className='flex sm:gap-1 justify-center items-center'>
        <BriefcaseMedical className='text-muted sm:size-6'/>
        <h1 className='text-muted sm:text-lg font-semibold'>MedScan AI</h1>
      </div>

      <ul className='hidden lg:flex md:gap-8'>
        <li className='font-medium border-b-4 border-muted text-muted py-4 cursor-pointer hover:border-muted/30'>Home</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>About Us</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>Detection</li>
        <li className='font-medium py-4 cursor-pointer hover:border-b-4 border-muted/30'>Contact Us</li>
      </ul>

      <div className='flex sm:gap-2 items-center justify-center'>
        <button className='sm:size-7 lg:size-8 hover:bg-muted/10 ring-1 rounded-full flex items-center justify-center hover:cursor-pointer text-muted'> 
          <Sun className='sm:size-4 lg:size-5 text-muted'/> 
        </button>
        <Button className={"btn-2"}>Login</Button>
        <Button className={"btn-1"}>Sign Up</Button>
      </div>

    </nav>
  )
}

import React from 'react'
import { FlaskConical } from "lucide-react";
import { useTheme } from 'next-themes';

export default function Badge() {
  const {theme, setTheme} = useTheme();

  return (
    <div className={`flex sm:gap-1 ring-1 ring-muted/40 rounded-full p-1 items-center w-fit ${theme === "light" ? "bg-teal-100/40" : "bg-[#18312E]/70"}`}>
      <FlaskConical className='text-muted sm:size-3 md:size-4'/>
      <p className='sm:text-[10px] md:text-sm font-medium text-muted'>AI-POWERED RESEARCH PLATFORM</p>
    </div>
  )
}

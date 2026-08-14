import React from 'react'
import { FlaskConical } from "lucide-react";

export default function Badge() {
  return (
    <div className='flex sm:gap-1 ring-1 ring-muted/40 rounded-full p-1 items-center w-fit bg-teal-100/40'>
      <FlaskConical className='text-muted sm:size-3 md:size-4'/>
      <p className='sm:text-[10px] md:text-sm font-medium text-muted'>AI-POWERED RESEARCH PLATFORM</p>
    </div>
  )
}

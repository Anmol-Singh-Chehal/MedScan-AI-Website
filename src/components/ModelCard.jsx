import React from 'react'

export default function ModelCard({ faIcon, title, desc}) {
  return (
    <div className='flex flex-col sm:gap-2 sm:p-4 ring-2 ring-muted/30 bg-muted/10 hover:ring-muted/60 rounded-xl'>

      <div className='sm:size-9 lg:size-12 flex items-center justify-center bg-muted/20 rounded-xl'>
        <i className={`fa-solid ${faIcon} sm:text-lg lg:text-xl text-muted`}></i>
      </div>

      <div className='flex flex-col sm:gap-1'>
        <h2 className='sm:text-lg lg:text-xl font-medium font-primary text-primary'>{title}</h2>
        <p className='sm:text-sm lg:text-[16px] font-medium font-secondary text-secondary'>{desc}</p>
      </div>
        
    </div>
  )
}

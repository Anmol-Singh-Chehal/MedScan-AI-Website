import React from 'react'
import Badge from '@/components/Badge'
import { ArrowRight } from 'lucide-react'
import homeImageLight from "@/assets/homeImageLight.jpg"

export default function Home() {
  return (
    <main className=''>
      
      <section className='lg:px-8 lg:py-20 xl:px-12 flex lg:gap-8 items-center justify-center bg-muted/10 sm:py-10 sm:px-4'>

        <div className="lg:w-1/2 xl:w-3/5  flex flex-col lg:gap-8 xl:gap-12 sm:gap-6">
          <Badge/>
          <div>
            <h1 className='sm:text-3xl lg:text-4xl xl:text-5xl text-primary font-bold font-primary'>Smarter Medical Imaging.</h1>
            <h1 className='sm:text-3xl lg:text-4xl xl:text-5xl text-muted font-bold font-primary'>Faster Insights</h1>
          </div>
          <h3 className='sm:text-sm md:text-lg xl:text-xl text-secondary font-medium font-secondary'>
            Explore an intelligent and intuitive platform designed to assist researchers and educators in analyzing complex medical scans with cutting-edge AI classification models. Explore an intelligent and intuitive platform designed to assist researchers and educators in analyzing complex medical scans with cutting-edge AI classification models.
          </h3>

          <div className='flex lg:gap-4 sm:gap-4'>
            <button className='font-medium bg-muted text-white flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md cursor-pointer ring-2 ring-muted sm:text-sm sm:px-2 sm:py-2 sm:gap-1'>
              <h3>Try Image Detection</h3>
              <ArrowRight className='sm:size-4'/>
            </button>
            <button className='font-medium text-muted flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md ring-2  hover:bg-muted hover:text-white hover:ring-2 hover:ring-muted bg-muted/10 ring-muted/40 cursor-pointer sm:text-sm sm:px-2 sm:py-2 sm:gap-1'>Learn About Us</button>
          </div>
        </div>

        <div className="lg:w-1/2 xl:w-2/5 hidden lg:flex lg:p-2 rounded-lg bg-white">
          <img
            src={homeImageLight} alt="" className="w-full h-auto object-contain rounded-lg"/>
        </div>

      </section>

    </main>
  )
}
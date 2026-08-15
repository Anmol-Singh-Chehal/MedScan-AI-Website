import React from 'react'
import Badge from '@/components/Badge'
import { ArrowRight } from 'lucide-react'
import homeImageLight from "@/assets/homeImageLight.jpg"
import ModelCard from '@/components/ModelCard'
import StepCard from '@/components/StepCard'
import FeatureCard from '@/components/FeatureCard'
import { useTheme } from 'next-themes';
import { NavLink } from 'react-router-dom'

export default function Home() {
  const {theme, setTheme} = useTheme(); 

  return (
    <main className='pt-15'>
      
      <section className='lg:px-8 lg:py-20 xl:px-12 flex lg:gap-8 items-center justify-center bg-paper-1 sm:py-10 sm:px-4'>

        <div className="lg:w-1/2 xl:w-3/5  flex flex-col lg:gap-8 xl:gap-12 sm:gap-6">
          <Badge faIcon={"fa-flask"} tag={"AI-POWERED RESEARCH PLATFORM"}/>
          <div>
            <h1 className='sm:text-3xl lg:text-4xl xl:text-5xl text-primary font-bold font-primary'>Smarter Medical Imaging.</h1>
            <h1 className='sm:text-3xl lg:text-4xl xl:text-5xl text-muted font-bold font-primary'>Faster Insights</h1>
          </div>
          <h3 className='sm:text-sm md:text-lg xl:text-xl text-secondary font-medium font-secondary'>
            Explore an intelligent and intuitive platform designed to assist researchers and educators in analyzing complex medical scans with cutting-edge AI classification models. Explore an intelligent and intuitive platform designed to assist researchers and educators in analyzing complex medical scans with cutting-edge AI classification models.
          </h3>

          <div className='flex lg:gap-4 sm:gap-4'>
            <NavLink to={"/detection"} className={`font-medium bg-muted ${theme==="light"? "text-white" : "text-paper-1"} flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md cursor-pointer ring-2 ring-muted sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary`}>
              <h3>Try Image Detection</h3>
              <ArrowRight className='sm:size-4'/>
            </NavLink>
            <NavLink to={"/about-us"} className={`font-medium text-muted flex lg:gap-2 items-center lg:px-4 lg:py-2 lg:text-lg rounded-md ring-2  hover:bg-muted ${theme==="light"? "hover:text-white" : "hover:text-paper-1"} hover:ring-2 hover:ring-muted bg-muted/10 ring-muted/40 cursor-pointer sm:text-sm sm:px-2 sm:py-2 sm:gap-1 font-primary`}>Learn About Us</NavLink>
          </div>
        </div>

        <div className="lg:w-1/2 xl:w-2/5 hidden lg:flex lg:p-2 rounded-lg bg-white">
          <img
            src={homeImageLight} alt="" className="w-full h-auto object-contain rounded-lg"/>
        </div>

      </section>

      <section className='sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12 flex flex-col sm:gap-10'>
       <div className='flex flex-col text-center sm:gap-2'>
          <h1 className='sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary'>Explore Multiple Imaging Modalities</h1>
          <p className='sm:text-sm lg:text-lg font-medium text-secondary font-secondary'>Our platform supports various scan types, providing tailored AI analysis workflows for different research needs.</p>
       </div>

        <div className='flex flex-col sm:gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3'>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <ModelCard faIcon="fa-brain" title={"Model Efficient-Net-b0"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
        </div>
      </section>

      <section className='sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12 flex flex-col sm:gap-10 bg-paper-1'>
        <div className='flex flex-col text-center sm:gap-2'>
          <h1 className='sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary'>How It Works?</h1>
          <p className='sm:text-sm lg:text-lg font-medium text-secondary font-secondary'>The Clinical Workflow is</p>
        </div>

        <div className='flex flex-col sm:gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-4'>
          <StepCard faIcon="fa-robot" title={"1. Ingestion"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <StepCard faIcon="fa-robot" title={"2. Processing"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <StepCard faIcon="fa-robot" title={"3. Analysis"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
          <StepCard faIcon="fa-robot" title={"4. Reporting"} desc={"Our platform supports various scan types, providing tailored AI analysis workflows for different research needs."}/>
        </div>
      </section>

      <section className='sm:py-10 sm:px-4 lg:px-8 lg:py-20 xl:px-12  flex flex-col sm:gap-10'>
        <div className='flex flex-col text-center sm:gap-2'>
          <h1 className='sm:text-xl md:text-2xl lg:text-3xl font-medium text-primary font-primary'>Privacy & Security</h1>
          <p className='sm:text-sm lg:text-lg font-medium text-secondary font-secondary'>Your medical images and patient information are handled with strong security measures designed to protect sensitive healthcare data</p>
        </div>
        <FeatureCard
          points={[
            {
              icon: "fa-lock",
              text: "Your uploaded medical data remains private and is not shared with third parties."
            },
            {
              icon: "fa-shield-halved",
              text: "Sensitive information is protected using secure data-handling practices."
            },
            {
              icon: "fa-user-shield",
              text: "Patient information is handled with strict access controls."
            },
            {
              icon: "fa-database",
              text: "Uploaded files are securely processed and stored according to the platform's data-retention policy."
            },
            {
              icon: "fa-user-secret",
              text: "We prioritize confidentiality when processing X-ray, MRI, and CT scan data."
            }
          ]}
        />
      </section>
    </main>
  )
}
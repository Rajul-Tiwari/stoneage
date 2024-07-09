import { ExploreImg, ExploreImg2, ExploreImg7 } from '@/assets'
import React from 'react'
import { ServiceCrousel } from '..';

const Index = ({ data }) => {
  return (
    <div className='bg-white'>
      <div className='md:flex gap-4 md:w-11/12 mx-auto py-20 p-8'>
        <div className='lg:w-49p mb-4 lg:h-805'>
          <video 
            preload="none"
            autoPlay={true}
            muted
            playsInline
            loop
            className='w-full h-full object-cover'
            src={data?.detailsImages1}
            alt="Video not found"
          >
            <source src={data?.detailsImages1} type="video/mp4" />
          </video>
        </div>
        <div className='lg:w-49p mb-4 lg:h-805'>
          <img src={data?.detailsImages2.src} alt="" className='w-full h-full object-cover' />
        </div>
      </div>
      <ServiceCrousel data={data}/>
      <div className='py-16 md:w-11/12 p-8 mx-auto'>
      <video 
            preload="none"
            autoPlay={true}
            muted
            playsInline
            loop
            className='w-full h-full object-cover'
            src={data?.detailsImages3}
            alt="Video not found"
          >
            <source src={data?.detailsImages3} type="video/mp4" />
          </video>
      </div>
    </div>
  )
}

export default Index

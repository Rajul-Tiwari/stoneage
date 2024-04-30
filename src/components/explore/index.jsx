import { ExploreImg, ExploreImg1, ExploreImg2, ExploreImg7 } from '@/assets'
import React from 'react'
import { exploreImages } from '@/constant'
import { ServiceSlider } from '..';
const Index = () => {
  console.log(exploreImages);
  return (
    <div className='bg-white '>
      <div className='border-b border-black'>
        <div className='md:flex gap-4 md:w-11/12 mx-auto py-16 p-8 '>
          <div className='lg:w-[680px] mb-4  lg:h-[805px]'>
            <img src={ExploreImg.src} alt="" />
          </div>
          <div className='lg:w-[680px] lg:h-[805px]'>
            <img src={ExploreImg2.src} alt="" />
          </div>
        </div>

      </div>
      <ServiceSlider />
      <div className='py-16 md:w-11/12 p-8 mx-auto '>
        <img src={ExploreImg7.src} alt="" />
      </div>
    </div>
  )
}

export default Index

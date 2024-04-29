import { rightArrow } from '@/assets'
import React from 'react'
import { service } from '@/constant'

const index = () => {
  return (
    <div className='bg-primary'>
    <div className=' w-11/12 mx-auto'>

        <h1 className='md:text-65 text-[34px] font-Roboto md:w-[40%] md:leading-[70px] leading-48 font-semibold'>Let’s create <br/> something magical</h1>
        <div className='flex gap-4 items-center py-8'>
            <p className='text-2xl  font-InstrumentSerif'>Start Project</p>
            <img className='w-5 h-3 mt-1' src={rightArrow.src} alt="" />
        </div>

        <div className='md:flex justify-between md:w-11/12 mx-auto py-12 gap-4 '>
                {
                    service.map((elem, i) => (
                        <div key={i} className='md:bg-servicediv bg-detailsdiv p-8 mb-4'> 
                            <h1 className='md:text-serviceTitle text-primary text-nowrap text-32  font-Roboto font-semibold'>{elem.title}</h1>
                            <p className='md:text-servicedescription text-textcolor text-lg md:mt-24 mt-8 py-4 leading-21.09 font-Roboto'>{elem.description}</p>
                        </div>
                    ))
                }
            </div>
    </div>
    </div>
  )
}

export default index

import React from 'react'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

const Services = () => {
  return (
    <div>
     <div className='max-w-Container mx-auto text-black font-pops'>
     <div className='flex items-center justify-between'>
        <h1 className='w-[289px] font-blod text-[48px]'>supplier on the country</h1>
        <h1 className='w-[651px] font-medium text-base'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</h1>
      </div>
     </div>
      <div className='mt-[50px]'>
        <picture className='flex'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </picture>
      </div>
    </div>
  )
}

export default Services

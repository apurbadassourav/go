import React from 'react'
import maps from '../../assets/Maps.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faUser,faList } from '@fortawesome/free-solid-svg-icons'


const Maps = () => {
  return (
    // <div className='bg-maps bg-cover bg-norepeat'>
    //   <div></div>
    // </div>
    <div>
        <picture>
            <img src={maps} alt=""  className='w-[1920px] h-[450px]'/>
        </picture>
      <div className='bg-red font-pops text-white py-[48px]'>
      <div className='max-w-Container mx-auto flex justify-between'>
            <h1 className='font-bold text-[36px] '>Want to join as member branch in your area?</h1>
            <a href="" className='font-semibold text-[16px] border-2 py-[14px] px-[32px]'>CONTACT</a>
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faList} />
           
        </div>
      </div>
    </div>
  )
}

export default Maps

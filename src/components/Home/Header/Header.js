import React from 'react';
import ingeltLog from '../../../assets/InGelt-white 3.svg';

function Header() {
  return (
    <header className='tw-bg-[#051C45]'>
      <div className='container'>
        <img className='tw-py-2' src={ingeltLog} alt="ingelt logo" width={70} />
      </div>
    </header>
  )
}

export default Header
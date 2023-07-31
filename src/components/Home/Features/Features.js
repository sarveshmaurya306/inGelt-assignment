import React from 'react'
import onlineLearningIcon from '../../../assets/Icons/online-learning.svg'
import webinarIcon from '../../../assets/Icons/webinar.svg'
import realeaseIcon from '../../../assets/Icons/release.svg'


function Features() {

  return (
    <>
      <div className='container tw-mb-2 tw-mt-12 -xl:tw-mt-10 '>
        <div className='row'>
          <FeatureCard cardImg={realeaseIcon} content="Free IELTS Modules" desc="20,000+ Listed Properties  across 5 countries." />
          <FeatureCard cardImg={onlineLearningIcon} content="Offline Classes" desc="20,000+ Listed Properties  across 5 countries." />
          <FeatureCard cardImg={webinarIcon} content="Live / Online Classes" desc="20,000+ Listed Properties  across 5 countries." />
        </div>

      </div>
    </>
  )
}


function FeatureCard({ cardImg, content, desc }) {
  return (
    <>
      <div className='col-md-4 col-12 tw-my-5'>
        <div className='my_card tw-text-white'>
          <svg viewBox='0 0 50 50' className='tw-absolute tw-min-w-[300px] xl:tw-min-w-[400px] tw-min-h-[200px]'>
            <circle cx="100%" cy="0%" r={8} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={12} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={16} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={20} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
          </svg>
          <div className='tw-py-6 tw-px-3'>
            <div className='tw-flex tw-flex-col tw-items-center'>
              <span className='tw-p-5 tw-bg-white tw-w-fit tw-h-fit tw-rounded-full tw-mb-2'>
                <img src={cardImg} alt="card " />
              </span>
              <p className='tw-font-bold tw-text-sm xl:tw-text-xl'>{content}</p>
              <p className='tw-text-[11px] xl:tw-text-xs tw-opacity-75'>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
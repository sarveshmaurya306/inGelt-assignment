import React from 'react'

import womanImage from '../../../assets/images/women-png-img 1.svg'
import boardLogo from '../../../assets/board logo_high 1.svg';
import communityIcon from '../../../assets/Icons/community 1.svg'
import realEstateIcon from '../../../assets/Icons/real-estate (1) 1.svg'
import boardingPassIcon from '../../../assets/Icons/boarding-pass 2.svg'
import realeaseIcon from '../../../assets/Icons/release.svg'

function Service() {
  return (
    <>
      <div className='my_service tw-mt-12 tw-pt-24 tw-pb-0 tw-overflow-hidden xl:tw-overflow-y-clip'>
        <div className='container'>
          <div className='row'>
            <span className='offset-0 offset-xl-6 col-12 col-xl-6 tw-text-white tw-text-xl xl:tw-text-3xl tw-font-bold tw-text-center tw-my-1'>Our Services</span>
          </div>
          <div className='row tw-mt-8 xl:tw-mt-0'>
            <div className='tw-flex tw-justify-center xl:tw-block col-12 col-xl-6 tw-text-white' style={{ overflow: 'visible' }}>
              <div className="tw-mockup-phone tw-border-white " style={{ overflow: 'visible' }}>
                <div className="tw-camera"></div>
                <div className="tw-display" style={{ overflow: 'visible' }} >
                  <div className="tw-artboard tw-artboard-demo tw-bg-white tw-phone-1">
                    <img src={boardLogo} className="-tw-mt-12 tw-scale-50" alt='logo' />
                    <img src={womanImage} className='tw-mt-10 tw-scale-[1.4]' style={{ overflow: 'visible' }} alt='logo' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-xl-6 xl:tw-my-0 tw-my-10 tw-text-white tw-flex tw-justify-center tw-items-center tw-pb-14'>
              <div className='row'>
                <ServiceCard cardImg={realeaseIcon} content="Accommodation" desc1="20,000+ Listed Properties  across 5 countries." desc2="100+ cities" />
                <ServiceCard cardImg={boardingPassIcon} content="Visa Application" desc1="By Industry leading Immigration Consultants." desc2="Quick & Hassle Free Visa Filing." />
                <ServiceCard cardImg={communityIcon} content="Centralized Community" desc1="Talk to international student community." desc2="Ask your queries and doubts" />
                <ServiceCard cardImg={realEstateIcon} content="Education Loan" desc1="100% Funding with quick loan sanction!" desc2="Pre-admission loan." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



function ServiceCard({ cardImg, content, desc1, desc2 }) {
  return (
    <>
      <div className='col-xl-6 col-12 tw-flex tw-justify-center xl:tw-block'>
        <div className='my_service_card tw-text-white tw-overflow-visible tw-my-6'>
          <svg viewBox='0 0 50 50' className='tw-absolute '>
            <circle cx="100%" cy="0%" r={8} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={14} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={20} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
            <circle cx="100%" cy="0%" r={26} fill='transparent' stroke="#f7f7f81a" stroke-width="0.1" />
          </svg>

          <span className='tw-flex tw-relative tw-bottom-[40px] tw-left-[40px] tw-m-3 tw-p-5 tw-bg-white tw-w-fit tw-h-fit tw-rounded-3xl'>
            <img src={cardImg} alt="card " />
          </span>
          <div className='tw-px-10 tw-pb-8 -tw-mt-8'>
            <div className='tw-flex tw-flex-col tw-items-center'>

              <p className='tw-font-bold tw-text-base xl:tw-text-lg'>{content}</p>

              <ul className='tw-list-inside tw-list-disc tw-my-2'>
                <li className='tw-text-[11px] xl:tw-text-xs tw-text-white'>{desc1}</li>
                <li className='tw-text-[11px] xl:tw-text-xs tw-text-white'>{desc2}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service
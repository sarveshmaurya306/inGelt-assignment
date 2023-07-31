import React from 'react'
import phoneIcon from '../../../assets/Icons/bxs_phone-call.svg'
import locationIcon from '../../../assets/Icons/carbon_location-filled.svg'
import emailIcon from '../../../assets/Icons/ic_sharp-email.svg';
import tw from '../../../assets/Icons/tw.svg';
import fb from '../../../assets/Icons/fb.svg';
import ig from '../../../assets/Icons/ig.svg';

function ContactUs() {
  return (
    <div>
      <div className='container'>
        <span className='tw-flex tw-justify-center tw-font-semibold tw-text-xl xl:tw-text-3xl'>Get in Touch with Us</span>
        <span className='tw-flex tw-justify-center tw-font-medium tw-text-sm xl:tw-text-base tw-opacity-60'>Elevate Your Institute Management and Student Success - Contact Us Now!</span>
      </div>

      <div className='container tw-mt-16 tw-pb-16'>
        <div className='contact_us row tw-overflow-hidden'>
          <div className='col-12 col-xl-5 tw-px-10 tw-py-10 xl:tw-pl-32 xl:tw-pt-32'>
            <div className='tw-text-2xl xl:tw-text-4xl tw-font-bold tw-my-1'>Contact Us</div>
            <div className=''>
              <div className=''>
                <span className='tw-text-sm xl:tw-text-base'>Feel Free to contact us any time. We will get back to you as soon as we can!.</span>

                <form className='tw-my-10 '>
                  <div className='tw-flex tw-flex-col tw-my-10 '>
                    <label>Name</label>
                    <input name="name" className='contact_us_input' placeholder='Doe' />
                  </div>
                  <div className='tw-flex tw-flex-col tw-my-10 '>
                    <label>Email</label>
                    <input name="email" className='contact_us_input' placeholder='Email' type='email' />
                  </div>
                  <div className='tw-flex tw-flex-col tw-my-10 '>
                    <label>Message</label>
                    <textarea name="message" className='contact_us_input' placeholder='Write your message..' />
                  </div>
                </form>
              </div>

            </div>
          </div>
          <div className='col-12 offset-xl-4 col-xl-3 tw-bg-[#0064E1] tw-overflow-hidden xl:tw-overflow-visible'>
            <div className='tw-bg-transparent xl:tw-bg-[#001E43] tw-text-white xl:tw-w-[700px] xl:tw-h-[400px] tw-rounded-[30px] tw-py-20 tw-px-6 xl:tw-px-16 tw-flex tw-flex-col tw-justify-between contact_information_card' >
              <span className='tw-text-white tw-font-bold tw-text-xl xl:tw-text-2xl tw-mb-6 xl:tw-mb-0'>Contact Information</span>
              <span className='tw-text-white tw-text-sm xl:tw-text-base tw-flex tw-w-auto xl:tw-max-w-[50%]'><img className='tw-mr-2 tw-scale-75 xl:tw-scale-100' src={phoneIcon} alt="phone" /> +1012 3456 789</span>
              <span className='tw-text-white tw-text-sm xl:tw-text-base tw-flex tw-w-auto xl:tw-max-w-[50%]'><img className='tw-mr-2 tw-scale-75 xl:tw-scale-100' src={emailIcon} alt="email" /> demo@gmail.com</span>
              <span className='tw-text-white tw-text-sm xl:tw-text-base tw-flex tw-w-auto xl:tw-max-w-[50%]'><img className='tw-mr-2 tw-scale-75 xl:tw-scale-100' src={locationIcon} alt="location" />132 Dartmouth Street Boston, Massachusetts 02156 United States</span>
            </div>
            <span className='tw-flex tw-justify-around tw-pb-8 xl:tw-pb-0 xl:tw-items-end xl:tw-h-[35%]'>
              <a href="/"><img src={tw} alt="social media" /></a>
              <a href='/'><img src={ig} alt="social media" /></a>
              <a href='/'><img src={fb} alt="social media" /></a>
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
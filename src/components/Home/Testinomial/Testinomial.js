import React, { useState } from 'react'
import girlImage2 from '../../../assets/images/Image.svg'


function Testinomial() {
  const [testimonialNumber, setTestimonialNumber] = useState(0);
  const handleNextTestimonial = () => {
    setTestimonialNumber(e => {
      return ((e + 1) % 4);
    })
  }
  const handlePrevTestimonial = () => {
    setTestimonialNumber(e => {
      if (e === 0) return 3;
      else return e - 1;
    })
  }
  return (
    <>
      <div className='container tw-mt-28 drop_shadow tw-flex tw-justify-center '>
        <div className='tw-bg-white my_testimonial tw-pb-32 xl:tw-pb-0'>
          <div className='row tw-flex tw-flex-col-reverse xl:tw-flex-row'>
            <div className='col-12 col-xl-6 tw-pl-8 tw-py-10 xl:tw-pl-24 xl:tw-py-20'>
              <span className='tw-text-2xl xl:tw-text-4xl tw-font-semibold tw-text-center tw-my-1 tw-mr-1 tw-flex' >
                <p style={{ borderBottom: '3px solid black' }}>Freda</p>
                <p className='tw-ml-1'>Collier</p>
              </span>
              <span className='tw-py-12 tw-flex tw-flex-col tw-pr-6'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57812 16.501V27.7912L7.70874 22.1537L12.8394 16.5161V10.8635V5.21085H7.70874H2.57812V16.501ZM17.1606 16.501V27.7912L22.2913 22.1537L27.4219 16.5161V10.8635V5.21085H22.2913H17.1606V16.501Z" fill="black" />
                </svg>
                <span className='tw-text-xs xl:tw-text-sm tw-font-medium'>
                  Ipsum vel nobis doloremque est aut non accusantium vero molestias. Et est minima dolorem eum modi atque sint nobis. Enim quod facere. Reiciendis necessitatibus ipsam non aspernatur voluptate id.
                </span>
                <svg className='tw-ml-[50%]' xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.57812 16.5011V27.7913L7.70874 22.1537L12.8394 16.5161V10.8635V5.21088H7.70874H2.57812V16.5011ZM17.1606 16.5011V27.7913L22.2913 22.1537L27.4219 16.5161V10.8635V5.21088H22.2913H17.1606V16.5011Z" fill="black" />
                </svg>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="190" height="31" viewBox="0 0 190 31" fill="none">
                <path d="M15 0.937744L18.3677 11.3025H29.2658L20.4491 17.7083L23.8168 28.073L15 21.6672L6.18322 28.073L9.55093 17.7083L0.734152 11.3025H11.6323L15 0.937744Z" fill="#001E43" />
                <path d="M55 0.937744L58.3677 11.3025H69.2658L60.4491 17.7083L63.8168 28.073L55 21.6672L46.1832 28.073L49.5509 17.7083L40.7342 11.3025H51.6323L55 0.937744Z" fill="#001E43" />
                <path d="M95 0.937744L98.3677 11.3025H109.266L100.449 17.7083L103.817 28.073L95 21.6672L86.1832 28.073L89.5509 17.7083L80.7342 11.3025H91.6323L95 0.937744Z" fill="#001E43" />
                <path d="M135 0.937744L138.368 11.3025H149.266L140.449 17.7083L143.817 28.073L135 21.6672L126.183 28.073L129.551 17.7083L120.734 11.3025H131.632L135 0.937744Z" fill="#001E43" />
                <path d="M175 0.937744L178.368 11.3025H189.266L180.449 17.7083L183.817 28.073L175 21.6672L166.183 28.073L169.551 17.7083L160.734 11.3025H171.632L175 0.937744Z" fill="#001E43" />
              </svg>
            </div>
            <div className='col-12 col-xl-6 tw-flex xl:tw-justify-end tw-items-center tw-relative xl:tw-left-14'>
              {/* <div className='tw-relative tw-left-80 tw-top-28 '> */}
              <div className='tw-hidden xl:tw-flex tw-absolute -tw-rotate-[25deg]'>
                <img src={girlImage2} alt="girl" width={250} className='tw-z-50 tw-relative' />
              </div>
              <div className='xl:tw-absolute tw-mt-12 tw-flex tw-justify-center tw-w-full xl:tw-my-0 xl:tw-block xl:tw-w-auto'>
                <img src={girlImage2} alt="girl" width={250} className='tw-z-50 tw-relative' />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className='container tw-mb-28 tw-flex tw-justify-center -tw-mt-16 tw-relative tw-z-10'>
        <button className='tw-font-extrabold tw-text-2xl xl:tw-text-3xl' onClick={handlePrevTestimonial}>&lang;</button>
        <span className='tw-mx-4'><span className='tw-font-semibold tw-text-5xl'>{testimonialNumber + 1}</span>/ 4</span>
        <button className='tw-font-extrabold tw-text-2xl xl:tw-text-3xl' onClick={handleNextTestimonial}> &rang;</button>
      </div>

    </>
  )
}

export default Testinomial
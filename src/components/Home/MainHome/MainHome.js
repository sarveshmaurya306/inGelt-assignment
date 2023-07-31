import React, { useState } from 'react'
import correctIcon from '../../../assets/Icons/Line.svg';
import girlImage from '../../../assets/images/girl.png';

const countryOptionData = [
  {
    _id: 1,
    name: "India",
    emoji: "🇮🇳",
    code: "+91"
  },
  {
    _id: 2,
    name: "Iceland",
    emoji: "🇮🇸",
    code: "+354"
  },
  {
    _id: 3,
    name: "Indonesia",
    emoji: "🇮🇩",
    code: "+62"
  },
  {
    _id: 4,
    name: "Iran",
    emoji: "🇮🇷",
    code: "+98"
  },
  {
    _id: 5,
    name: "Iraq",
    emoji: "🇮🇶",
    code: "+964"
  },
  {
    _id: 6,
    name: "Ireland",
    emoji: "🇮🇪",
    code: "+353"
  }
]


function MainHome() {
  const [loginTabState, setloginTabState] = useState(1);

  return (
    <>
      <div className='row xl:tw-h-screen'>
        <div className='col-12 col-xl-6 '>
          <div className='col-12 tw-mt-8 tw-px-6 lg:tw-px-20 xl:tw-px-28'>
            <div>
              <p className='tw-text-[#001E43] tw-text-2xl xl:tw-text-4xl tw-font-bold tw-text-center tw-my-1 '>Start Your IELTS Preparation</p>
              <p className='tw-text-[#001E43] tw-text-2xl xl:tw-text-4xl tw-font-bold tw-text-center tw-my-1'>And Get Desire Bands</p>
            </div>
            <div className='tw-my-4 tw-text-center tw-opacity-70 tw-text-xs xl:tw-text-sm'>
              <ul className='tw-list-inside tw-list-disc'>
                <li>Get access to IELTS Centralised Library</li>
                <li>British Council Certified Teacher</li>
              </ul>
            </div>


            <div className='login_card'>
              <div className='tw-py-8 tw-px-4 xl:tw-px-20'>
                <div className='row'>
                  <div className='col tw-flex tw-justify-center tw-items-center tw-cursor-pointer' style={loginTabState === 1 ? { opacity: 1 } : { opacity: 0.4 }} onClick={() => setloginTabState(1)}>
                    <img src={correctIcon} alt="correct icon" />
                    <p className='tw-text-xs xl:tw-text-sm'>Start</p>
                  </div>
                  <div className='col tw-flex tw-justify-center tw-items-center tw-cursor-pointer' style={loginTabState === 2 ? { opacity: 1 } : { opacity: 0.4 }} onClick={() => setloginTabState(2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="black" fill-opacity="1"></circle>
                      <svg x="5" y="5" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="12" fill="white">2</text>
                      </svg>
                    </svg>
                    &nbsp;
                    <p className='tw-text-xs xl:tw-text-sm'>Fill Detail</p>
                  </div>
                  <div className='col tw-flex tw-justify-center tw-items-center tw-cursor-pointer ' style={loginTabState === 3 ? { opacity: 1 } : { opacity: 0.4 }} onClick={() => setloginTabState(3)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <circle cx="10" cy="10" r="10" fill="black" fill-opacity="1"></circle>
                      <svg x="5" y="5" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                        <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-size="12" fill="white">3</text>
                      </svg>
                    </svg>
                    &nbsp;
                    <p className='tw-text-xs xl:tw-text-sm'>Confirm</p>
                  </div>
                </div>

                <div className='tw-my-8'>
                  <p className='tw-text-[#001E43] tw-font-semibold tw-text-xl xl:tw-text-3xl'>Free IELTS Classes</p>
                </div>

                <form>
                  <input className='my_input tw-w-full' placeholder='Enter Your Full Name' />
                  <div className='tw-flex tw-my-8'>
                    <select name="countryCode" className='my_input tw-w-[50%] xl:tw-w-[35%]' style={{ padding: 0 }}>
                      {
                        countryOptionData.map(item => {
                          return <option key={item._id} value={item.name} >{item.emoji} {item.code} </option>
                        })
                      }
                    </select>
                    <input className='tw-ml-6 my_input tw-w-full' placeholder='Phone Number' />
                  </div>
                  <div>
                    <button className='tw-bg-[#001E43] tw-text-white tw-py-3 tw-rounded-lg tw-w-full tw-font-semibold' type='submit'>
                      Continue
                    </button>
                  </div>
                  <div>
                    <p className='tw-text-[10px] xl:tw-text-[12px] tw-text-center tw-my-4'>By continuing, you agree to our Term of services & Privacy policy</p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
        <div className='col-xl-6 col-12 tw-mt-6 xl:tw-px-0 tw-px-10 xl:tw-mt-0 right_bg tw-flex tw-justify-center tw-h-full container tw-items-center ' >
          <img src={girlImage} alt="girl" width={600} />
        </div>
      </div>
    </>
  )
}

export default MainHome
import React from 'react'
import gitHub from '../assets/github.png'
import insta from '../assets/Instagram.webp'
import linkedIn from '../assets/linkedin2.jpg'
import whatsapp from '../assets/WhatsApp_icon.png.webp'

import fb from '../assets/fb.webp'
const Footer = () => {
  return (
    <div className='container-fluid bg-violet mt-3 text-center'>
      <h2 className='text=center text-white pt-3' style={{ fontWeight: 'bold' }}>Vangara Srinivas</h2>
      <div className='mt-4'>

        <a data-aos-delay="100" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href="https://wa.me/9491118102?text=Hello%2C%20Srinivas!" target='_blank'>
          <img src={whatsapp} width={30} className='me-4' />
        </a>
        <a data-aos-delay="300" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.instagram.com/vangara_srinivas/' target='_blank'><img src={insta} width={30} className='me-4' /></a>
        <a data-aos-delay="500" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='hhttps://www.linkedin.com/in/vangara-srinivas-b2a983127/' target='_blank'><img src={linkedIn} width={30} className='me-4' /></a>
        <a data-aos-delay="700" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://github.com/vangarasrinivas?tab=repositories' target='_blank'><img src={gitHub} width={30} className='me-4' /></a>
        <a data-aos-delay="900" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.facebook.com/profile.php?id=100006435709182' target='_blank'><img src={fb} width={30} /></a>
      </div>
      <h5 className='text-white mt-4 pb-5'>© vangara srinivas. All rigths reserved</h5>
    </div>
  )
}

export default Footer
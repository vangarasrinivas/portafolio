import React from 'react'
import fb from '../assets/fb.webp'
import gitHub from '../assets/github.png'
import insta from '../assets/Instagram.webp'
import linkedIn from '../assets/linkedIn.png'
import profileimage2 from '../assets/profileimage2.jpeg'
import whatsapp from '../assets/WhatsApp_icon.png.webp'
const Banner = () => {
 
    return (
        <>
            <div style={{ background: '#f8f7ff' }} className='py-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 text-center-small">
                            <div>
                                <span className='letter-onebyone'><span className='span-1' style={{ fontWeight: 'bold' }}>Hey! I am</span> <span className='span-2 text-violet'>Vangara Srinivas</span></span><br />
                                <span className='span-3 text-violet letter-onebyone'>Software Engineer</span>
                                <div className='fs-5'>
                                    Full-Stack Developer with extensive experience in web design and development.
                                    I specialize in creating high-quality, websites and applications.
                                    <span className='d-none-small'>My expertise spans across both front-end and back-end technologies.</span>
                                </div>
                                <button data-aos-delay="300" data-aos="fade-zoom-in" className='btn bg-violet text-white mt-4 px-5'>Hire me</button>
                                <div className='mt-5 mb-4'>

                                    <a data-aos-delay="500" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href="https://wa.me/9491118102?text=Hello%2C%20Srinivas!" target='_blank'><img src={whatsapp} width={30} className='me-4' /></a>
                                    <a data-aos-delay="800" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.instagram.com/vangara_srinivas/' target='_blank'><img src={insta} width={30} className='me-4' /></a>
                                    <a data-aos-delay="1100" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.linkedin.com/in/vangara-srinivas-b2a983127/' target='_blank'><img hre src={linkedIn} className='me-4' width={30} /></a>
                                    <a data-aos-delay="1400" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://github.com/vangarasrinivas?tab=repositories' target='_blank'><img src={gitHub} width={30} className='me-4' /></a>
                                    <a data-aos-delay="1700" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="600" href='https://www.facebook.com/profile.php?id=100006435709182' target='_blank'><img src={fb} width={30} /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className='banner-image-div margin-top2-small' data-aos-delay="5000" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="500">
                                <img src={profileimage2} width="100%" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </>
    )
}

export default Banner
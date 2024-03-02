import React, { useEffect, useState } from 'react'
import first from '../assets/first1.png'
import second from '../assets/second.png'
import insta from '../assets/Instagram.webp'
import linkedIn from '../assets/linkedIn.png'
import gitHub from '../assets/github.png'
import whatsapp from '../assets/WhatsApp_icon.png.webp'
const Banner = () => {
    const [cout, setCount] = useState(0)

    return (
        <>
            {/* <div className='banner-div'>
                <div>
                    <span className='span-1'>Hey! Iam</span> <span className='span-2 text-violet'>Vangara Srinivas</span><br />
                    <span className='span-3'>Software Developer</span>
                    <div>
                        Fornt-End with high level of experience in web designing and development,<br /> producting the quality work.
                    </div>
                    <button className='btn bg-violet text-white mt-4'>Hire me</button>
                    <div className='mt-44'>

                        <button className='btn bg-violet text-white '>insta</button>
                        <button className='btn bg-violet text-white '>LinkedIn</button>
                        <button className='btn bg-violet text-white '>GitHub</button>


                    </div>
                </div>
                <div>



                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className='banner-image-div'>
                                <img src={first} width="450px" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='banner-image-div'>
                                <img src={second} width="450px" />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='banner-image-div'>
                                <img src={first} width="450px" />
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                    <div className='banner-image-div'>
                        <img src={first} width="450px" />
                    </div>



                </div>
                
            </div> */}
            <div className=''>
                <div className='banner-grid'>
                    <div className='content-center'>
                        <div>
                        <span className='span-1'>Hey! Iam</span> <span className='span-2 text-violet'>Vangara Srinivas</span><br />
                        <span className='span-3'>Software Engineer</span>
                        <div>
                            Fornt-End with high level of experience in web designing and development,<br /> producting the quality work.
                        </div>
                        <button className='btn bg-violet text-white mt-5'>Hire me</button>
                        <div className='mt-5'>

                            <a href="https://wa.me/9491118102?text=Hello%2C%20Srinivas!" target='_blank'><img src={whatsapp} width={30} className='me-4' /></a>
                            <a href='https://www.instagram.com/vangara_srinivas/' target='_blank'><img src={insta} width={30} className='me-4' /></a>
                            <a href='https://www.linkedin.com/in/vangara-srinivas-b2a983127/' target='_blank'><img hre src={linkedIn}  className='me-4' width={30} /></a>
                            <a href='https://github.com/vangarasrinivas?tab=repositories' target='_blank'><img src={gitHub} width={30} /></a>
                            
                  

                            {/* <button className='btn bg-violet text-white '>insta</button>
                            <button className='btn bg-violet text-white '>LinkedIn</button>
                            <button className='btn bg-violet text-white '>GitHub</button> */}


                        </div>
                        </div>

                    </div>
                    <div className='content-center'>

                        <div className='banner-image-div'>
                            <img src={first} width="450px" />
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Banner
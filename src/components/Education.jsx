import React from 'react'
import './experience.css'


const Education = () => {
    return (
        <div className="container mt-4" id='education'>
            <div className='d-flex justify-content-center'>
                <h2 className='border-botom text-violet pb-1' style={{ width: 'fit-content', fontWeight: 'bolder' }}>Education</h2>
            </div>
            <section>
                <div className="container py-5" style={{ backgroundColor: '#f8f7ff' }}>
                    <div className="main-timeline">
                        <div data-aos-delay="700" data-aos="fade-right" className="timeline left">
                            <div className="card text-white" style={{ backgroundColor: '#8B93FF' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>Primary (1-7th)</span>
                                    </div>
                                    <h5 className='mt-2'>2002-2011</h5>
                                    <h6><strong>MPUP School, Kothuru (Pt.), Macherla (Md.), Palnadu (Dt.)</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="700" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#03AED2' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>SSC</span>
                                    </div>
                                    <h5 className='mt-2'>2011 - 2012</h5>
                                    <h6><strong>Geetha Gurukulam, Dachepalli (Md.), Paldandu (Dt.)</strong></h6>

                                </div>
                            </div>
                        </div>
                        <div className="timeline left" data-aos-delay="700" data-aos="fade-right">
                            <div className="card text-white" style={{ backgroundColor: '#88D66C' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>Intermediate</span>
                                    </div>
                                    <h5 className='mt-2'>2012 - 2014</h5>
                                    <h6><strong>Oxford Junior Collage, Piduguralla (Md.), Palnadu (Dt.)</strong></h6>
                                </div>
                            </div>
                        </div>
                        <div className="timeline right" data-aos-delay="700" data-aos="fade-left">
                            <div className="card text-white" style={{ backgroundColor: '#EF5A6F' }}>
                                <div className="card-body p-4">
                                    <div>
                                        <span className='fs-5' style={{ fontWeight: 'bold' }}>B.Tech</span>
                                    </div>
                                    <h5 className='mt-2'>2014 - 2018</h5>
                                    <h6><strong>GMRIT, (IT), Rajam (Md.), Srikakulam (Dt.)</strong></h6>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
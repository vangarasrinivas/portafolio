import React from 'react'
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.jpg'
import work6 from '../assets/work6.jpg'


const Work = () => {
    const pics = [
        { item: work1, fade: 'fade-right' },
        { item: work2, fade: '' },
        { item: work3, fade: 'fade-left' },
        { item: work4, fade: 'fade-right' },
        { item: work5, fade: '' },
        { item: work6, fade: 'fade-left' },
    ]
    return (
        <div className="container-fluid mt-4" id='work'>
            <div className='d-flex justify-content-center'>
                <h2 className='border-botom text-violet pb-1' style={{ width: 'fit-content', fontWeight: 'bolder' }}>
                    Works
                </h2>
            </div>
            <div className='container mt-4'>
                <div className="row">
                    {
                        pics?.slice(0, 3)?.map((item) => {
                            return <div data-aos-delay="7000" data-aos={item?.fade} className='col-sm-4 mb-4' style={{ overflow: 'hidden' }}>
                                <img className='work-image' src={item?.item} width='100%' style={{ borderRadius: '15px' }} />
                            </div>
                        })
                    }

                </div>
                <div className="row d-none-small">
                    {
                        pics?.slice(3)?.map((item) => {
                            return <div data-aos-delay="7000" data-aos={item?.fade} className='col-sm-4 mb-4' style={{ overflow: 'hidden' }}>
                                <img className='work-image' src={item?.item} width='100%' style={{ borderRadius: '15px' }} />
                            </div>
                        })
                    }

                </div>


            </div>
        </div>
    )
}

export default Work
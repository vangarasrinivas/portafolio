import React from 'react'
import work1 from '../assets/work1.jpg'
import work2 from '../assets/work2.jpg'
import work3 from '../assets/work3.jpg'
import work4 from '../assets/work4.jpg'
import work5 from '../assets/work5.jpg'
import work6 from '../assets/work6.jpg'


const Work = () => {
    const pics = [work1, work2, work3, work4, work5, work6]
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
                            return <div className='col-sm-4 mb-4' style={{ overflow: 'hidden' }}>
                                <img className='work-image' src={item} width='100%' style={{ borderRadius: '15px' }} />
                            </div>
                        })
                    }

                </div>
                <div className="row d-none-small">
                    {
                        pics?.slice(3)?.map((item) => {
                            return <div className='col-sm-4 mb-4' style={{ overflow: 'hidden' }}>
                                <img className='work-image' src={item} width='100%' style={{ borderRadius: '15px' }} />
                            </div>
                        })
                    }

                </div>


            </div>
        </div>
    )
}

export default Work
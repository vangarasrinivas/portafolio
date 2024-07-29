import React from 'react'
import bootstrap from '../assets/bootstrap.png'
import CSS from '../assets/css.jpg'
import html from '../assets/html.png'
import js from '../assets/js.png'
import mongodb from '../assets/mongodb.png'
import mui from '../assets/mui.png'
import nextjs from '../assets/nextjs.webp'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'
import reactnative from '../assets/reactnative.jpg'
import ProgressBar from './ProgressBar'
// import bootstrap from '../assets/bootstrap.png'

const MySkills = () => {

  return (

    <div className="container mt-4" id='skills'>
      <div className='d-flex justify-content-center'>
        <h2 className='border-botom text-violet pb-1' style={{ width: 'fit-content', fontWeight:'bolder' }}>Profesional Skills</h2>
      </div>
      {/* <h3 style={{ fontWeight: '700' }}>Profesional Skills</h3>
        <span className='my2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</span> */}
      <div className='row mt-3' style={{ fontWeight: '700' }}>
        <div className="col-sm-6" >
          <div data-aos-delay="5000" data-aos="fade-right">
            <ProgressBar skill={'HTML5'} percentage={95} color='red' img={html} />
          </div>
          <div data-aos-delay="5000" data-aos="fade-right">
            <ProgressBar skill={'CSS5'} percentage={80} color={'green'} img={CSS} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-right">
            <ProgressBar skill={'Bootstrap'} percentage={95} color={'#0d6efd'} img={bootstrap} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-right">
            <ProgressBar skill={'Meterial UI'} percentage={75} color={'#d63384'} img={mui} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-right">
            <ProgressBar skill={'Java Script'} percentage={85} color={'#0dcaf0'} img={js} width={35} />

          </div>

        </div>
        <div className="col-sm-6">
         
          <div data-aos-delay="5000" data-aos="fade-left">
            <ProgressBar skill={'React JS'} percentage={90} color={'#ffc107'} img={reactjs} width={42} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-left">
            <ProgressBar skill={'React Native'} percentage={60} color={'#6f42c1'} img={reactnative} width={43} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-left">
            <ProgressBar skill={'Node JS'} percentage={65} color={'#20c997'} img={nodejs} width={44} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-left">
            <ProgressBar skill={'Next JS'} percentage={50} color={'#fd7e14'} img={nextjs} width={33} />

          </div>
          <div data-aos-delay="5000" data-aos="fade-left">
            <ProgressBar skill={'Mongo DB'} percentage={50} color={'red'} img={mongodb} width={33} />

          </div>

        </div>
      </div>


    </div>

  )
}

export default MySkills
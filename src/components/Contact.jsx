import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false)
    const [tx, setTx] = useState(false)


    useEffect(() => {
        if (tx) {
            setTimeout(() => {
                setTx(false)
            }, 3000)
        }
    }, [tx])

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true)
        emailjs
            .sendForm('service_q5jks8i', 'template_9x3kyz4', form.current, 'zM5J2qf9Saz7Fv-wD')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.text);
                    form.current.reset();
                    setLoading(false)
                    setTx(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setLoading(false)

                }
            );
    };

    return (
        <>
            <div className='d-flex justify-content-center mt-4' id='contact'>
                <h2 className='border-botom text-violet pb-1' style={{ width: 'fit-content', fontWeight: 'bolder' }}>Contact</h2>
            </div>
            <div className="container-fluid text-white" style={{ backgroundColor: '#03AED2' }}>
                <div className="container">
                    <div className="row py-5 text-center-small">
                        <div className='col-sm-6'>
                            <h3 data-aos-delay="7000" data-aos="fade-right"><strong>Get in Touch</strong></h3>
                            <div className='margin-1-top margin-top1-small' data-aos-delay="7000" data-aos="fade-right">
                                <span><strong>Phone :</strong></span> <span>9491118102, 7569527853</span>
                            </div>
                            <div data-aos-delay="7000" data-aos="fade-left">
                                <span><strong>Email :</strong></span> <span>srinivasvangara96@gmail.com</span>
                            </div>
                            <div className='fs-5 mt-4'>
                                Full-Stack Developer with extensive experience in web design and development.
                                I specialize in creating high-quality, websites and applications.
                                My expertise spans across both front-end and back-end technologies.

                            </div>
                        </div>
                        <div className='col-sm-6'>
                            {
                                tx && (
                                    <div className='text-center mt-4'>
                                        <h1><strong>Thank You!</strong></h1>
                                        <h4><strong>We will get back to you!</strong></h4>
                                    </div>
                                )
                            }
                            {
                                !tx && (
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="row" data-aos-delay="7000" data-aos="fade-left">
                                            <div className='col-sm-6'>
                                                <input placeholder='Name' className='form-control d-none' type="text" value={'Srinivas'} name="to_name" />
                                                <input placeholder='Name' className='form-control margin-top2-small' type="text" name="from_name" required />
                                            </div>

                                            <div className='col-sm-6'>
                                                <input placeholder='Phone' className='form-control margin-top2-small' type="text" name="phone_no" required />

                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className='col-sm-12 data-aos-delay="7000" data-aos="fade-left"'>
                                                <input placeholder='Email' className='form-control d-none' value={'srinivasvangara96@gmail.com'} type="email" name="user_email" />
                                                <input placeholder='Email' className='form-control' type="email" name="from_email" required />
                                            </div>
                                        </div>
                                        <div className='mt-4' data-aos-delay="7000" data-aos="fade-right">
                                            <textarea placeholder='Message' className='form-control' name="message" />
                                        </div>

                                        <input type="submit" disabled={loading} value={loading ? 'Sending mail...' : "Send"} data-aos-delay="7000" data-aos="fade-left" className='btn bg-violet text-white mt-4 px-5' />
                                    </form>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;

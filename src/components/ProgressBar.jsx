import React, { useEffect, useRef } from 'react';

const ProgressBar = ({ skill, percentage, color, img, width }) => {
    const progressRef = useRef(null);

    useEffect(() => {
        if (progressRef.current) {
            progressRef.current.style.setProperty('--progress-value', `${percentage}%`);
            progressRef.current.style.setProperty('--progress-color', color);
        }
    }, [percentage, color]);

    return (
        <div
            className='pt-3 pb-2 my-3'
            style={{
                background: 'hsl(0deg 0% 100%)',
                borderRadius: '10px',
                boxShadow: '0px 4px 25px rgba(14, 36, 49, 0.15)',
            }}
        >
            <div className='d-flex justify-content-between align-items-center px-4'>
                <div className='d-flex align-items-center'>
                    <div>
                        <img src={img} width={width || 30} className='me-3' />
                    </div>
                    <div>
                        {skill}
                    </div>

                </div>
                <div>{percentage}%</div>
            </div>
            <div className='mt-3 mx-1'>
                <div className='progress-bar' ref={progressRef}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

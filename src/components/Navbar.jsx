import React, { useState } from 'react'

const Navbar = () => {
    const [routeName, setRouteName] = useState('#');
    const routeFunc = (navItem) => {
        return routeName == navItem ? "nav-link active text-white navtext-underline" : 'nav-link active text-white';
    }

    return (
        <nav className="navbar navbar-expand-md bg-violet fixedElement">
            <div className="container-fluid">

                <a onClick={() => setRouteName('#')} className="navbar-brand text-white cnav-brand" href="#"><h4 style={{ fontWeight: 'bolder' }}>Vangara Srinivas</h4></a>

                <button className="navbar-toggler text-violet" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        
                    <li className="nav-item" onClick={() => setRouteName('#')}>
                            <a className={routeFunc('#')} aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item" onClick={() => setRouteName('skills')}>
                            <a className={routeFunc('skills')} aria-current="page" href="#skills">Skills</a>
                        </li>

                        <li className="nav-item" onClick={() => setRouteName('experience')}>
                            <a className={routeFunc('experience')} aria-current="page" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className={routeFunc('work')} onClick={() => setRouteName('work')} aria-current="page" href="#work">Works</a>
                        </li>

                        <li className="nav-item">
                            <a className={routeFunc('education')} onClick={() => setRouteName('education')} aria-current="page" href="#education">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className={routeFunc('contact')} onClick={() => setRouteName('contact')} aria-current="page" href="#contact">Contact</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}

export default Navbar
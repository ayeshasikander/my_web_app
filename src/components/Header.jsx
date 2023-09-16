import React from 'react';
import Label from './Label';
import logo from '../assets/Amaryllis-2.png'
import './style.css'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
const Header = () => {
    const scrollToBanner = () => {
        scroll.scrollTo('banner', {
            duration: 500,
            offset: -100,
            smooth: 'easeInOutQuart',
        });
    };

    // Function to handle smooth scrolling to the Skills section
    const scrollToSkills = () => {
        scroll.scrollTo('skills', {
            duration: 500,
            offset: -100,
            smooth: 'easeInOutQuart',
        });
    };

    // Function to handle smooth scrolling to the Projects section
    const scrollToProjects = () => {
        scroll.scrollTo('projects', {
            duration: 500,
            offset: -100,
            smooth: 'easeInOutQuart',
        });
    };

    // Function to handle smooth scrolling to the Service section
    const scrollToService = () => {
        scroll.scrollTo('service', {
            duration: 500,
            offset: -100,
            smooth: 'easeInOutQuart',
        });
    };

    // Function to handle smooth scrolling to the Footer section
    const scrollToFooter = () => {
        scroll.scrollTo('footer', {
            duration: 500,
            offset: -100,
            smooth: 'easeInOutQuart',
        });
    };

    return (

        <nav className="navbar navbar-expand-lg fixed-top bg" aria-label="Offcanvas navbar large">
            <div className="container">
                <img src={logo} alt="Amaryllis" style={{height:"55px",width:"200px"}} />
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <div className="toggle">
                        <div id="bar1" className="bars"></div>
                        <div id="bar2" className="bars"></div>
                        <div id="bar3" className="bars"></div>
                    </div>
                </button>
                <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header bg">
                       <Label text="Web-App" fontSize="20px"/>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body bg">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="link">
                                <ScrollLink
                                    to="banner"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-light nav-link active"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    onClick={scrollToBanner}
                                >
                                    <Label text="Home" fontSize="20px" />
                                </ScrollLink></li>
                                <li className="link">
                                <ScrollLink
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-light nav-link active"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    onClick={scrollToSkills}
                                >
                                    <Label text="Skills & Tools" fontSize="20px" />
                                </ScrollLink></li>
                                <li className="link">
                                <ScrollLink
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-light nav-link active"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    onClick={scrollToProjects}
                                >
                                    <Label text="Projects" fontSize="20px" />
                                </ScrollLink></li>
                          
                                <li className="link">
                                <ScrollLink
                                    to="services"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-light nav-link active"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    onClick={scrollToService}
                                >
                                    <Label text="Services" fontSize="20px" />
                                </ScrollLink></li>
                                <li className="link">
                                <ScrollLink
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="text-light nav-link active"
                                    style={{ fontFamily: "'Roboto', sans-serif" }}
                                    onClick={scrollToFooter}
                                >
                                    <Label text="Contact Us" fontSize="20px" />
                                </ScrollLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from '../assets/html.png'
import skill2 from '../assets/CSS.png'
import skill3 from '../assets/JS.png'
import skill4 from '../assets/react3-bg.png'
import skill5 from '../assets/btsp.png'
import skill6 from '../assets/rebs.png'
import skill7 from '../assets/vscode.png'
import skill8 from '../assets/strapi-1.png'
import './style.css';

const Skill = (props) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill skill-bg' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-box'>
                            <h2 style={{ color: "white" }}>Skills & Tools</h2>
                            <hr style={{ height: "7px", width: "100%", color: "#0497ad" }}></hr>

                            <p>Armed with a versatile toolbox, I transform ideas into captivating digital experiences.</p>
                            <Carousel
                                swipeable={false}
                                draggable={false}
                                // showDots={true}
                                responsive={responsive}
                                ssr={true}
                                infinite={true}
                                autoPlay={props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={props.deviceType}
                                dotListClass="custom-dot-list-style"
                                // itemClass="carousel-item-padding-40-px"
                                className='skill-slider'>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill1} style={{ width: "79%" }} alt="HTML5" />
                                    </div>
                                    <h5 style={{ color: "white" }}>HTML</h5>

                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill2} style={{ width: "60%" }} alt="CSS" />
                                    </div>
                                    <h5 style={{ color: "white" }}>CSS</h5>
                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill3} style={{ width: "60%" }} alt="Js" />
                                    </div>
                                    <h5 style={{ color: "white" }}>Javascript</h5>
                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill5} style={{ width: "95%" }} alt="React" />
                                    </div>
                                    <h5 style={{ color: "white" }}>Bootstrap</h5>
                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill4} style={{ width: "85%" }} alt="React" />
                                    </div>
                                    <h5 style={{ color: "white" }}>React Js</h5>
                                </div>

                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill6} style={{ width: "78%", margin: "10px" }} alt="React" />
                                    </div>
                                    <h5 style={{ color: "white" }}>React-Bootstrap</h5>
                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill8} style={{ width: "70%", margin: "20px" }} alt="Strapi CMS" />                                    </div>
                                    <h5 style={{ color: "white" }}>Strapi CMS</h5>
                                </div>
                                <div className='item carousel-item'>
                                    <div className='circular-image'>
                                        <img src={skill7} style={{ width: "78%", margin: "10px" }} alt="React" />
                                    </div>
                                    <h5 style={{ color: "white" }}>Visual Studio Code</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container >
        </section >
    )
}

export default Skill

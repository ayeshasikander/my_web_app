import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import { BsGithub } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { Container, Row, Col } from 'react-bootstrap';
import Animate from './Animate';
import './style.css'
import CustomModal from './CustomModal';
import CustomModal2 from './CustomModal2';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Web Developer', 'Full-stack developer', 'React Developer', 'Front-End Developer', 'React Front-End Developer',],
        loop: 0
    });

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <section className='banner' id='banner'>
            <Container>
                <Row className='align-items-center text-light'>
                    <Col xs={12} md={6} xl={7}>
                        {/* <span className='tagline'>Welcome to my portfolio presented to you!</span> */}
                        <h1>I'm Ayesha & I work as a....</h1>
                        <h1><span style={{
                            backgroundImage: 'linear-gradient(to right, #0497ad, #0cb36d)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                            marginLeft:"60px",
                            fontFamily: 'Italianno',
                            fontStyle:"italic"
                        }}>{text}</span>
                        <Cursor cursorColor='lightgreen' /></h1>
                        <p style={{fontFamily:'sans-serif'}}>Coding your dreams into vibrant reality, we effortlessly unite 
                            front-end and back-end, crafting adored interactive experiences.</p>
                        <div className='m-3'>
                            <button className="btn1 m-2" onClick={() => setModalShow(true)}>Hire Me</button>
                            <CustomModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                            <button className="btn1 m-2" onClick={() => setModalShow2(true)}>Let's Talk ...</button>
                            <CustomModal2 show={modalShow2} onHide={() => setModalShow2(false)} />
                        </div>

                        <div className='info'>
                            See More About me  <AiOutlineArrowRight style={{ color: "skin", margin: "3px", height: "30px", width: "35px" }} />
                        </div>
                        <div className='icons'>
                            <a href="https://www.linkedin.com/in/ayesha-sikander-016790247" target="_blank" rel="noopener noreferrer"><PiLinkedinLogoBold className='iconstyle' /></a>
                            <a href="https://github.com/ayeshasikander" target="_blank" rel="noopener noreferrer"><BsGithub className='iconstyle' /></a>
                            <a href="AYESHA SIKANDER.pdf" download="AYESHA SIKANDER.pdf"><ImProfile className='iconstyle' /></a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <Animate />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;

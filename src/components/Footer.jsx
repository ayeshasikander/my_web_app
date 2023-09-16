import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BiLogoGmail, BiLogoTelegram } from 'react-icons/bi';
import { FaPhone } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineLinkedin } from 'react-icons/ai';
// import { SiFiverr } from 'react-icons/si';
import './style.css';
import CustomModal3 from './CustomModal3';

const Footer = () => {

    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section className='footer footer-bg'id='footer'>
            <Container>
                <Row>
                    <Col md={12} className='text-center m-4'>
                        <hr style={{ height: "7px", width: "100%", color: "#0497ad" }}></hr>
                        <div className='heading-line mb-1'>  
                            <div className='contact'>Contact Us</div>
                        </div>
                        <div className='icon-links'>
                            <a className='links' href='mailto:sikanderayesha46@gmail.com' target="_blank" rel="noopener noreferrer">
                                <BiLogoGmail className='icon-style' />
                            </a>
                            <a className='links' href='https://t.me/Ayesha_amaryllis?start=chat?text=Hi.. Seeking a web developer to create my custom project.' target="_blank" rel="noopener noreferrer">
                                <BiLogoTelegram className='icon-style' />
                            </a>
                            <a className='links' href='tel:+923161248074' target="_blank" rel="noopener noreferrer">
                                <FaPhone className='icon-style' />
                            </a>
                            <a className='links' href='https://wa.me/923161248074?text=Hi.. Seeking a web developer to create my custom project.' target="_blank" rel="noopener noreferrer">
                                <ImWhatsapp className='icon-style' />
                            </a>

                            <a className='links' href='https://www.linkedin.com/in/ayesha-sikander-016790247' target="_blank" rel="noopener noreferrer">
                                <AiOutlineLinkedin className='icon-style' />
                            </a>
                            {/* <a className='links' href='/' target="_blank" rel="noopener noreferrer">
                                <SiFiverr className='icon-style' />
                            </a> */}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className='text-center'>
                        <div style={{ margin: "20px" }}><span style={{ color: "#2c3435", fontSize: "16px", fontWeight: "bold" }} onClick={() => setModalShow(true)}>Amaryllis.2023 ©</span>
                            <CustomModal3 show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;

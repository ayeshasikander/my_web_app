import React, { useState } from 'react';
import Label from './Label';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import Animationpc from '../assets/animation_cute.json';
import CustomModal2 from './CustomModal2';
const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Front-End Web Development',
      content: 'Responsive Web Design: Creating websites that adapt seamlessly to various devices and screen sizes for an optimal user experience.',
      content2:'User Interface (UI) Design: Designing visually appealing and intuitive interfaces that enhance user engagement and interaction.',
      content3:'Front-End Framework Integration: Integrating robust front-end frameworks like React for dynamic and feature-rich web applications.',
    },
    {
      title: 'Full Stack Web Development',
      content: 'Single Page Application (SPA) Development: Building modern, fast-loading SPAs for streamlined user interactions.',
      content2:'Progressive Web App (PWA) Development: Developing web applications that offer app-like experiences, including offline functionality and push notifications.',
      content3:'Content Management System (CMS) Integration',
      content4:'Cross-Browser Compatibility',
    },
    {
      title: 'Improving your Websites or Web Apps',
      content: 'E-commerce Website Development: Creating online stores with secure payment processing and user-friendly shopping experiences.',
      content2:'Website Redesign: Revamping and modernizing existing websites to improve aesthetics, functionality, and user engagement.'
    }
  ];

  const handleServiceClick = (index) => {
    setSelectedService(services[index]);
  };

  const renderContactButton = () => {
    if (selectedService) {
      return (
        <>
          <button className="btn1 m-2" onClick={() => setModalShow(true)}>Contact Now</button>
          <CustomModal2
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          {/* <div className='robot m-2 p-3'><Lottie animationData={Animationpc} style={{ height: "150px" }} /></div> */}
        </>
      );
    }
    return null;
  };
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className='services' id='services'>
      <Container>
        <Row>
          <div style={{ textAlign: "center" }}>
            <Label text="Our Services" fontSize="50px" />
            <hr style={{ height: "7px", width: "100%", color: "#0497ad" }}></hr>
          </div>
          <div className='row'>
            <Col xs={12} md={6} xl={6}>
              <p style={{ color: "#0497ad", fontSize: "25px", margin: "5px" }}>We serve in all Web-Development Related Fields</p>
              <div className='list-bx'>
                <ul className='list'>
                  {services.map((service, index) => (
                    <li
                      key={index}
                      onClick={() => handleServiceClick(index)}
                      className={`service-item ${selectedService?.title === service.title ? 'active' : ''}`}
                      style={{ color: selectedService?.title === service.title ? 'white' : '' }}
                    >
                      {service.title}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col>
              <div className="content-bx"style={{fontFamily:"sans-serif"}}>
                <h2 style={{ fontSize: "30px" }}>{selectedService?.title}</h2>
                <p style={{ fontSize: "17px" }}>{selectedService?.content}</p>
                <p style={{ fontSize: "17px" }}>{selectedService?.content2}</p>
                <p style={{ fontSize: "17px" }}>{selectedService?.content3}</p>
                <p style={{ fontSize: "17px" }}>{selectedService?.content4}</p>
                {renderContactButton()}
              </div>

              {!selectedService?.content && (
                <>
                  <div className='text-center'> <Label text="please select service for detail" fontSize="20px" /></div>
                  <div className='robot m-2 p-3'><Lottie animationData={Animationpc} style={{ height: "150px" }} /></div>
                </>
              )}
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Service;

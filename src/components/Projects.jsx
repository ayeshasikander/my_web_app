import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Label from './Label'
import Demo from './Demo'
import './style.css'
import Service from './Service'

const Projects = () => {

  return (

    <section className='project project-bg' id='projects'>
      {/* <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fillOpacity="1" d="M0,160L48,160C96,160,192,160,288,176C384,192,480,224,576,240C672,256,768,256,864,261.3C960,267,1056,277,1152,277.3C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <Container>
        <Row className='project-section p-4'>
          <div className='project-bx text-center m-2 p-2'>
            <Label text="Projects" fontSize="50px" />
            <p style={{ color: "#0497ad" }}>Let's see my work</p>
            <hr style={{ height: "7px", width: "100%", color: "#0497ad" }}></hr>
          </div>
          <Col xs={12} md={6} xl={7}>
            <h1 style={{ color: "#0497ad" }}>{'IT-Hub News Web App'}</h1>
            <p style={{ color: "white", fontSize: "20px" }}>IT-HUB Web App utilizes React.js for a responsive front-end, Bootstrap for improved UI aesthetics,
              and modern CMS Strapi for efficient backend content management,
              resulting in a dynamic user experience with cutting-edge technologies.</p>

          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className='projectdemo1'> <Demo /></div>
          </Col>
        </Row>
      </Container>
      <Service />
    </section>
  )
}

export default Projects

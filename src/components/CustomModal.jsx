import React from 'react'
import { Button, Modal as BootstrapModal } from 'react-bootstrap';
import './style.css'
const CustomModal = (props) => {

    return (
        <BootstrapModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <BootstrapModal.Header closeButton style={{ backgroundImage: "linear-gradient(to left, #0497ad, #000000)" }}>
                <BootstrapModal.Title id="contained-modal-title-vcenter">
                    Hire Me
                </BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <h4>Me - Aspiring Web Developer</h4>
                <p>
                    I'm a passionate web developer with a thirst for knowledge and a love for technology.
                    My mission is to secure a challenging position where I can apply my skills and creativity to drive success.
                    Let's collaborate and make an impact together. Reach me at  <a className='way1' href='mailto:sikanderayesha46@gmail.com' target="_blank" rel="noopener noreferrer">
                        sikanderayesha46@gmail.com  </a>  to discuss further.
                </p>
                <p>
                    In addition to my web development expertise, I'm an avid explorer.
                    I believe that my zest for discovery and adaptability perfectly complement my work as a developer.
                    Let's harness this energy to create something exceptional.
                </p>
            </BootstrapModal.Body>
            <BootstrapModal.Footer style={{ backgroundImage: "linear-gradient(to right, #0497ad, #000000)" }}>
                <Button onClick={props.onHide} className='bttn'>Close</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};


export default CustomModal

import React from 'react'
import { Button, Modal as BootstrapModal } from 'react-bootstrap';
import { BsEmojiSmile } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { BiLogoGmail } from 'react-icons/bi'
import './style.css'

const CustomModal2 = (props) => {

    return (
        <BootstrapModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <BootstrapModal.Header closeButton style={{ backgroundImage: "linear-gradient(to left, #0497ad, #000000)" }}>
                <BootstrapModal.Title id="contained-modal-title-vcenter">
                    Let's Talk...
                </BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <h4 style={{ textAlign: "center", fontSize: "27px", fontWeight: "bold", fontFamily: "roboto" }}>How you would like to proceed?Choose your own way.
                    <BsEmojiSmile />
                </h4>

                <div className='text-center'>
                    <a className='way' href='https://wa.me/923161248074?text=Hi.. Seeking a web developer to create my custom project.' target="_blank" rel="noopener noreferrer">Whatsapp: (+92 316 1248074)
                        <ImWhatsapp className='iconstyle-1' /> </a></div>
                <div className='text-center'>
                    <a className='way' href='mailto:sikanderayesha46@gmail.com' target="_blank" rel="noopener noreferrer">Gmail: (sikanderayesha46@gmail.com)
                        <BiLogoGmail className='iconstyle-1' /></a> </div>

            </BootstrapModal.Body>
            <BootstrapModal.Footer style={{ backgroundImage: "linear-gradient(to right, #0497ad, #000000)" }}>
                <Button onClick={props.onHide} className='bttn'>Close</Button>
            </BootstrapModal.Footer>
        </BootstrapModal>
    );
};


export default CustomModal2

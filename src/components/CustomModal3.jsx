import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap';
const CustomModal3 = (props) => {

    return (
        <BootstrapModal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <BootstrapModal.Header closeButton >
                <BootstrapModal.Title id="contained-modal-title-vcenter">
                    Amaryllis
                </BootstrapModal.Title>
            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <h4>Our selection of the name 'Amaryllis' is far from arbitrary; it embodies our core values and illustrates what we offer:</h4>
                <p>
                    ✨"Amaryllis: Where Creative Brilliance Meets Logical Precision,
                    Crafting Glamorous and Popular Web Solutions with Heartfelt Care.
                    Choose us to transform your vision into a captivating digital masterpiece that ensures
                    lasting success."</p>
            </BootstrapModal.Body>
         
        </BootstrapModal>
    );
};


export default CustomModal3

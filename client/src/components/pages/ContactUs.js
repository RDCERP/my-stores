// import React from 'react';
// import '../../App.css';

// export default function ContactUs() {
//   return <h1 className='contact-us'>CONTACT</h1>;
// }

import React from 'react';
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import { Row, Col } from 'react-bootstrap'; 


function ContactPage() {

return (
    <section>
        <h1 className="contact">contact me</h1>

        <div className="contact-icons">
        <Row>
            <Col lg={3} md={12}>
            <a href="https://github.com/moreza66">
                <h3> <BsGithub size={70}/> </h3>
            </a>
            <p class="icon-text">github</p>
            </Col>
            
            <Col lg={3} md={12}>
            <a href="https://www.linkedin.com/in/mohammad-reza-memar-653132149/">
            <h3> <BsLinkedin size={70}/> </h3>
            </a>
            <p class="icon-text">linkedin</p>
            </Col>

            <Col lg={3} md={12}>
            <a href="mailto:moreza.memar@gmail.com">
            <h3> <MdAlternateEmail size={70}/> </h3>
            </a>
            <p class="icon-text">email</p>
            </Col>
            
        
        </Row>
        </div>

    </section>
    );
}
    
export default ContactPage;

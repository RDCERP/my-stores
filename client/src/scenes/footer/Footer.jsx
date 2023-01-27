import React from "react";
import "./Footer.css";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="test text-center text-white"
      style={{ backgroundColor: "#f1f1f1" }}>
      <MDBContainer className=" MDB-container">
        <section className="mb-4 footer-container">
          FACEBOOK BUTTON
          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://www.facebook.com/profile.php?id=100089686995525"
            target="_blank"
            role="button">
            <MDBIcon fab className="fab fa-facebook-f" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="mailto:group.three.p3g3@gmail.com"
            target="_blank"
            role="button">
            <MDBIcon fab className="fa-google" />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color="link"
            floating
            size="lg"
            className="text-dark m-1"
            href="https://github.com/RDCERP/my-stores"
            target="_blank"
            role="button">
            <MDBIcon fab className="fa-github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className="text-center text-dark p-3 copy-right-footer">
        &copy; {new Date().getFullYear()} Copyright:
        <a className="text-dark" href="https://my-stores.herokuapp.com/">
          https://my-stores.herokuapp.com/
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;

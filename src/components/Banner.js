import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import pdf from "../assets/cv/CV.pdf"
import Typed from "typed.js"; // Import Typed.js library
import { BrowserRouter as Router } from "react-router-dom";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Banner = () => {
  // Create a ref for the text element that you want to animate
  
  
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js once the component is mounted
    const toRotate = ["Full-Stack Developer", "Designed", "developed"," software systems"];
    const options = {
      strings: toRotate,
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before typing starts in milliseconds
      backDelay: 1000, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation indefinitely
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy(); // destroy Typed.js instance when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              
              <h1>{"Montassar Tayachi"}</h1>
              <span className="wrap">
                {"{ "}
                <span ref={textRef}></span> {/* Use the textRef for Typed.js */}
                {"}"}
              </span>
              <p>
              I'm a computer science student passionate about technological advances and digital innovations. My career is focused on programming and problem solving, with deep expertise in a wide range of languages, including Java, Python, C, and JavaScript.
              </p>
             <a id="oo"
            href="https://montassartayachi.github.io/My-CV/"
            target="_blank"><span className="tagline">See my CV</span></a> 
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" style={{ width: "682px", height: "614px" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};

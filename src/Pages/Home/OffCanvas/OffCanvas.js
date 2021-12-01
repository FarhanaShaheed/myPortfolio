import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OffCanvas = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div style={{background:'black'}} className="text-light" onClick={handleShow}>
          <div style={{height:'3px',width:'30px'}} className="bg-light my-1"></div>
          <div style={{height:'3px',width:'30px'}} className="bg-light my-1"></div>
          <div style={{height:'3px',width:'30px'}} className="bg-light my-1"></div>
        </div>
  
        <Offcanvas className="bg-dark" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body>
              <div className="text-center">
              <Link style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}} to="/home" className="text-decoration-none fs-3">Home</Link><br /><br />
              <Link style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}} to="/about" className="text-decoration-none fs-3">About</Link><br /><br />
              <Link style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}} to="/projects" className="text-decoration-none fs-3">Projects</Link><br /><br />
              <Link style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}} to="/skills" className="text-decoration-none fs-3">Skills</Link><br /><br />
              <Link style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}} to="/blog" className="text-decoration-none fs-3">Blog</Link><br /><br />
              </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

export default OffCanvas;
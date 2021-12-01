import React from 'react';
import { Container } from 'react-bootstrap';
const Footer = () => {
    return (
        <div style={{borderTop:'5px solid white'}} className="text-light">
        <div className=" ">
            <Container>
                <div className="row">
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Use full links</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Donating systam</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Contact info</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">facebook pages</p> 
                    </div>
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0">View Gallery</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">My event link</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">All events list</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Subscription</p> 
                    </div>
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0">About us</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Our Blog</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Daily activities</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Summery</p> 
                    </div>
                    <div className="col-6 col-md-3 text-start py-3 ">
                        <p style={{cursor:'pointer'}} className="m-0 p-0">About us</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Our Blog</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Daily activities</p> 
                        <p style={{cursor:'pointer'}} className="m-0 p-0">Summery</p> 
                    </div>
                </div>
            </Container>
        </div>
        <div className=" py-2">
            <Container>
                <div>
                    <p className="text-center p-0 m-0">Allrights reserved || &copy;2021-2050</p>
                </div>
            </Container>
        </div>
        </div>
    );
};

export default Footer;
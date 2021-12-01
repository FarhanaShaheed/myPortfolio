import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Contact from '../../Contact/Contact';

const Banner = () => {
    const resume = "https://drive.google.com/file/d/1yrqpb3iM6LLjwCXST1CIlObU3IgrIPVw/view?usp=sharing";
    return (
        <div className="my-5">
            <Container>
            <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#Home</h2>
            <div className="text-light  custom_bg mainBanner" style={{textAlign:'justify',overflow:'hidden',borderRadius:'5px'}}>
            <div className="row">
                <div className="col-md-7">
                    <h2 style={{fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>This is Farhana Binta Shaheed</h2>
                    <h4>Frontend Web Developer</h4>
                    <p style={{color:'aqua'}}>I am Farhana Binta Shaheed. I have recently completed my bachelor in Computer Science and Engineeribg from Daffodiol International university.</p>
                    <div className="d-flex">
                    <a href={resume} target="_blank" rel="noopener noreferrer"><Button className="me-2">Download Resume</Button></a>
                        <Contact></Contact>
                    </div>
                </div>
                <div className="col-md-5 p-5">
                    <div className="mx-auto" style={{height:'350px',width:'350px',borderRadius:'100%',overflow:'hidden'}}>
                    <img style={{objectFit:'cover'}} className="h-100 w-100" src='https://i.pinimg.com/originals/91/36/f3/9136f3f0233857a446419c9855ceccf8.gif' alt="" />
                    </div>
                </div>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Banner;
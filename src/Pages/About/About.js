import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../utilities/Farhana.jpg'
const About = () => {
    return (
        <div className="text-light my-5">
            <Container>
            <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#About me</h2>
                <div className="row text-start">
                    <div className="col-12 col-md-9">
                        <h1>Farhana Binta Shaheed</h1>
                        <p style={{textAlign:'justify'}} className="text-width">
                        I have completed some projects in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
                        <br />
                        <br />
                        On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.
                        <br />
                        <br />
                        In addition to this, I have the ability to adapt to any type of team environment, I am team oriented and get along with others when working in a group setting. I also have the ability to work independently while staying on schedule and meeting those tight deadlines.
                        </p>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="w-100" style={{height:'350px',overflow:'hidden'}}>
                        <img style={{objectFit:'cover'}} src={img} alt="" className="w-100 h-100" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;
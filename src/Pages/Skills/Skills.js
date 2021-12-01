import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <div>
            <Container>
            <h2 className="text-end" style={{color:'aqua',fontFamily:"'Oswald', sans-serif",fontSize:'50px'}}>#My Skills</h2>
            <div className="row text-light pt-3">
                <div className="col-12 col-md-6 text-start">
                    <h3>I am alawys trying my best to <br /> Develop my Skills
                    </h3>
                    
                </div>
                <div className="col-12 col-md-6">
                <div className="my-2 p-3">
                    <ProgressBar label={`HTML-${80}%`} variant="success" now={80} /><br />
                    <ProgressBar label={`CSS-${70}%`} variant="warning" now={70} /><br />
                    <ProgressBar label={`Bootstrap-${95}%`} variant="primary" now={95} /><br />
                    <ProgressBar label={`Tailwind-${75}%`} variant="success" now={75} /><br />
                    <ProgressBar label={`Meterial ui-${65}%`} variant="danger" now={65} /><br />
                    <ProgressBar label={`JavaScript-${75}%`} variant="success" now={75} /><br />
                    <ProgressBar label={`React-${75}%`} variant="primary" now={85} /><br />
                    <ProgressBar label={`MongoDB-${80}%`} variant="success" now={80} /><br />
                    <ProgressBar label={`Express-${60}%`} variant="danger" now={60} /><br />
                    <ProgressBar label={`Node-${60}%`} variant="danger" now={60} /><br />
                    </div>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Skills;
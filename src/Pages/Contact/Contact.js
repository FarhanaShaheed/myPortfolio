import React, { useRef, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';


const Contact = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_fpdwqc8", "template_bzdlxay", form.current, "user_BDlWc9KWfIBfwznTeWpTJ")
      .then((result) => {
          alert("Your Message has send");
          e.target.name.value="";
          e.target.message.value="";
          e.target.email.value="";
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Contact
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Contact To Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <form onSubmit={sendEmail} ref={form}>
             <input type="text" placeholder="Your Name" className="p-2 w-100 my-2" name="name"/>
              <textarea type="text" placeholder="Your Message" className="p-2 w-100 my-2" name="message"/>
              <input type="email" placeholder="Your Email" className="p-2 w-100 my-2" name="email"/>
              <Button className="px-2 my-2" type="submit">Send</Button>
             </form>
          </Modal.Body>
        </Modal>
      </>
    );
  
};

export default Contact;
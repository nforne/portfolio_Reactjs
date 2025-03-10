/*
==========================
FileName: Contact.jsx
Student : Martine Nforne
ID : 301485889
Date : February 2, 2024
==========================
*/
import { useState } from 'react';
import {Link}  from "react-router-dom";
import nforne from "../../assets/nforne.jpg";
import right from "../../assets/right.png";
import './Contact.css';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return(
    <div className="home">  
            <img src={nforne} id='cf_img' alt="../Home/nforne.jpg" />      
            <hr />
            <div>            
              <pre>              
              {`JUNIOR SOFTWARE DEVELOPER
DEVOPS | AGILE TRAINED | ANALYTICAL`}              
              </pre>            
            <div><Link to="/column"><img src={right} id='abt_rt' alt="../Home/right.png" /></Link><p>Switch? 🧐</p></div>
            </div>
            <div id="cf_txt">
              <pre>{`CONTACT ME ... `} <i>Leave me a message!🤗</i></pre>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <Link to="/"><button type="submit">Submit</button></Link>
              </form>
                          
            </div>
      </div> 
  );
}
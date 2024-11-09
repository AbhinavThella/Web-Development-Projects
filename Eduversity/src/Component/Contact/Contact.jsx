import './Contact.css'
import React from 'react'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'


function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "98a3c7bd-3c99-4878-a03c-7293855219c4");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mail} alt="" />Abhinavt108@gamil.com</li>
                <li><img src={location} alt="" />Hyderabad, India</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label >Your Phone Number</label>
                <input type="text" name='phone' placeholder='Enter your mobile number' required />
                <label >Your Email</label>
                <input type="email" name='email' placeholder='Enter your email id'required/>
                <label >Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' ></textarea>
                <button className='btn dark-btn'>Submit now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact

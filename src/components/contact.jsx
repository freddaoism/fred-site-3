import { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_VO0Uk2v3PWyv8g9bgmQbg");

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, subject, message }, setState] = useState(initialState);
 
  
  const clearState = () => setState({ ...initialState });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console
      .log(name, email, subject, message)
 
      emailjs.sendForm("service_taub4uh", "gmail-template", e.target, "user_VO0Uk2v3PWyv8g9bgmQbg")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        });
        e.target.reset()
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send me an email and I will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" name="name" className="form-control" placeholder="Name"
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
 
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="email" name="email" className="form-control" placeholder="Email"
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
 
                  <div className="col-md-12">
                    <div className="form-group">
                      <input type="text" id="subject" name="subject" className="form-control" placeholder="Subject"
                        
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message"
                    
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg" value= "Send Message" id="button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center"></div>
      </div>
    </div>
  );
};


export default Contact;

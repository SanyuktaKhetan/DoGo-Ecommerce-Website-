import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout
      title={"Contact Us | DoGo - Get in Touch for Dog Product Inquiries"}
    >
      <div className="contact_banner">
        <div className="col-md-6"></div>
        <div className="contact_form col-md-6">
          <h1> Get In Touch </h1>
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br></br>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br></br>
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              placeholder={1234567890}
              required
            />
            <br></br>
            <label htmlFor="message">Message:</label>
            <br></br>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              defaultValue={""}
            />
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="content_col">
        <div classsName="service">
          <BiPhoneCall /> <br></br> 9876543214
        </div>
        <div classsName="web">
          <BiMailSend /> <br></br>{" "}
          <a href="mailto:www.dogocare.com">www.dogocare.com</a>
        </div>
        <div classsName="call">
          <BiSupport /> <br></br> 2500-2500-2500 (toll free)
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

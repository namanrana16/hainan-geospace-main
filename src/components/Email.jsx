import Section from "./Section";
import React, { useRef } from "react";
import { smallSphere, stars } from "../assets";
import emailjs from "emailjs-com";
import Heading from "./Heading";
import Button from "./Button";
import { useState } from "react";


const Email = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSendMail = () => {
    const subject = `Website Enquiry - ${formData.name}`;
    const body = `${formData.message}`;
    window.open(`mailto:contact@hn-geo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        form.current,
        "YOUR_USER_ID" // Replace with your EmailJS public key (User ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Section className="overflow-hidden" id="email">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </div>

        <Heading tag="Get started with Geospace" title="Contact Us" />

        {/* Email Form */}
        <div className="flex justify-center mt-10">
          <form className="w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                required
                onChange={handleInputChange}
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="user_email"
                required
              />
            </div> */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="flex justify-center">
              <Button onClick={handleSendMail} white>
                Send Mail
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button onClick={() => window.open("mailto:contact@hn-geo.com?subject=Your%20Subject&body=Your%20message%20here")}>
          Customer Support: contact@hn-geo.com
        </Button>
      </div>
    </Section>
  );
};

export default Email;


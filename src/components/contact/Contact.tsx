import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { contactOptions } from "../../data";
import {
  ContactForm,
  ContactOptions,
  ContactWrapper,
  Container,
  OptionItem,
} from "./contactStyle";

type Props = {};

const Contact = (props: Props) => {
  const form = useRef() as { current: any };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dktxvha",
        "template_0zcrjlw",
        form.current,
        "8H5r36eycgcgVGcQf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <ContactWrapper id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <Container className="container">
        <ContactOptions>
          {contactOptions.map((option) => (
            <OptionItem key={option.id}>
              {option.icon}
              <h4>{option.title}</h4>
              <a href={option.href} target="_blank" rel="noreferrer noopener">
                {option.action}
              </a>
            </OptionItem>
          ))}
        </ContactOptions>

        <ContactForm ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send a message
          </button>
        </ContactForm>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;

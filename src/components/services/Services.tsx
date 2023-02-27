import React from "react";
import { BiCheck } from "react-icons/bi";

import { StyleH2 } from "../../Global.styled";
import {
  Service,
  ServiceHead,
  ServiceList,
  ServicesContainer,
  ServicesWrapper,
  StyleH5,
} from "./servicesStyle";

type Props = {};

const services = [
  {
    title: "UI/UX Design",
    details: [
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
    ],
  },
  {
    title: "Web Developer",
    details: [
      "acceptable values  or each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
    ],
  },
  {
    title: "Content Creator",
    details: [
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
      "acceptable values for each of the filter functions.",
    ],
  },
];

const Services = (props: Props) => {
  return (
    <ServicesWrapper id="services">
      <StyleH5>What I Offer</StyleH5>
      <StyleH2>Services</StyleH2>

      <ServicesContainer className="container">
        {services.map((service, index) => (
          <Service key={index}>
            <ServiceHead>
              <h3>{service.title}</h3>
            </ServiceHead>

            <ServiceList>
              {service.details.map((detail, index) => (
                <li key={index}>
                  <BiCheck className="service_icon" />
                  <p>{detail}</p>
                </li>
              ))}
            </ServiceList>
          </Service>
        ))}
      </ServicesContainer>
    </ServicesWrapper>
  );
};

export default Services;

import React from "react";

import Images from "../../assets/images";
import { cards } from '../../data';
import { StyleH2 } from "../../Global.styled";
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutMe,
  AboutWrapper,
  Card,
  CardDescription,
  Cards,
  MyImage,
  StyleH5,
} from "./aboutStyle";

type Props = {};

const About = (props: Props) => {
  return (
    <AboutWrapper id="about">
      <StyleH5>Get To Known</StyleH5>
      <StyleH2>About me</StyleH2>

      <AboutContainer className="container">
        <AboutMe>
          <MyImage>
            <img src={Images.aboutMe} alt="About_Image" />
          </MyImage>
        </AboutMe>

        <AboutContent>
          <Cards>
            {cards.map((card, index) => (
              <Card key={index}>
                {card.icon}
                <StyleH5>{card.title}</StyleH5>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            ))}
          </Cards>

          <AboutDescription>
            Lorem ipsum dolor sit amen consectetur adipisicing elite. Rations
            excepting sapient commode nude minima? Neue i unto rem laudanum
            perspiciatis, dolores quo alias? Tenter dolorous gusto commode
            official facer, dolor sapient?
          </AboutDescription>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </AboutContent>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;

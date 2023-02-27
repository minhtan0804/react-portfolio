import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import { StyleH2 } from "../../Global.styled";
import {
  Details,
  ExperienceContainer,
  ExperienceWrapper,
  Language,
  Proficient,
  StyleH3,
  StyleH5,
  WebContent,
  WebProgramming,
} from "./experienceStyle";

type Props = {};

const experience = [
  {
    title: "Frontend Developer",
    language: [
      {
        name: "HTML",
        detail: "Experienced",
      },
      {
        name: "CSS",
        detail: "Intermediate",
      },
      {
        name: "Javascript",
        detail: "Experienced",
      },
      {
        name: "React",
        detail: "Intermediate",
      },
      {
        name: "Angular",
        detail: "Experienced",
      },
      {
        name: "Vue",
        detail: "Experienced",
      },
    ],
  },
  {
    title: "Backend Developer",
    language: [
      {
        name: "PHP",
        detail: "Experienced",
      },
      {
        name: "Java",
        detail: "Intermediate",
      },
      {
        name: "Node JS",
        detail: "Experienced",
      },
      {
        name: "MongoDB",
        detail: "Experienced",
      },
      {
        name: "MySQL",
        detail: "Experienced",
      },
      {
        name: "Python",
        detail: "Experienced",
      },
    ],
  },
];

const Experience = (props: Props) => {
  return (
    <ExperienceWrapper id="experience">
      <StyleH5>What Skills I Have</StyleH5>
      <StyleH2>My Experience</StyleH2>

      <ExperienceContainer className="container">
        {experience.map((item, index) => (
          <WebProgramming key={index}>
            <StyleH3>{item.title}</StyleH3>
            <WebContent>
              {item.language.map((tech, subIndex) => (
                <Details key={subIndex}>
                  <BsFillPatchCheckFill className="experience_icon" />
                  <div>
                    <Language>{tech.name}</Language>
                    <Proficient>{tech.detail} </Proficient>
                  </div>
                </Details>
              ))}
            </WebContent>
          </WebProgramming>
        ))}
      </ExperienceContainer>
    </ExperienceWrapper>
  );
};

export default Experience;

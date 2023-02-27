import React from "react";
import styled from "styled-components";
import { BsGithub, BsLinkedin, BsDribbble } from "react-icons/bs";

type Props = {};

const HeaderSocials = (props: Props) => {
  return (
    <WrapperSocials>
      <a
        href="https://linkedin.com"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com" target={"_blank"} rel="noopener noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://dribbble.com"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <BsDribbble />
      </a>
    </WrapperSocials>
  );
};

export default HeaderSocials;

const WrapperSocials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  bottom: 3rem;

  ::after {
    content: "";
    width: 1px;
    height: 2rem;
    background-color: var(--color-primary);
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

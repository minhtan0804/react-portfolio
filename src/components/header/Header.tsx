import React from "react";
import Images from "../../assets/images";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import {
  HeaderContainer,
  HeaderWrapper,
  MeImage,
  MyImage,
  Name,
  ScrollDown,
  Subtext,
} from "./headerStyle";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderWrapper>
      <HeaderContainer className="container">
        <Subtext>Hello, I'm</Subtext>
        <Name>Minh Tan</Name>
        <Subtext className="text-light">Fullstack Developer</Subtext>
        <CTA />

        <HeaderSocials />

        <MeImage>
          <MyImage src={Images.me} alt="my-image" />
        </MeImage>

        <ScrollDown href="#contact">Scroll Down</ScrollDown>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

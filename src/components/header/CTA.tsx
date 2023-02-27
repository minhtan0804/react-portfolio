import React from "react";
import styled from "styled-components";
import Images from "../../assets/images";
type Props = {};

const CTA = (props: Props) => {
  return (
    <WrapperCTA>
      <a href={Images.CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </WrapperCTA>
  );
};

export default CTA;

const WrapperCTA = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

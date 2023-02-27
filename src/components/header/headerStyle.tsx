import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 68vh;
  }
  

  @media screen and (max-width: 600px) {
    height: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const Subtext = styled.h5``;

export const Name = styled.h1``;

export const MeImage = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 30rem;
  position: absolute;
  left: calc(50%);
  transform: translateX(-50%);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
`;

export const MyImage = styled.img``;

export const ScrollDown = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0%.9rem;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

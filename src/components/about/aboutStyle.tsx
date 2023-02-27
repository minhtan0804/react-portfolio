import styled from "styled-components";

export const AboutWrapper = styled.section`
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const StyleH5 = styled.h5`
  font-size: 0.95rem;
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0rem auto 3rem;
  }
`;

export const MyImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);

  :hover {
    transform: rotate(0);
  }
`;

export const AboutContent = styled.div`
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const Card = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  .card_icon {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const CardDescription = styled.small`
  font-size: 0.7rem;
  color: var(--color-light);
`;

export const AboutDescription = styled.p`
  margin: 2rem 0 2.6rem;
  color: var(--color-light);

  @media screen and (max-width: 1024px) {
    margin: 1rem 0 1.5rem;
  }

  @media screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }
`;

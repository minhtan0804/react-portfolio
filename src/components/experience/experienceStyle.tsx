import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const StyleH5 = styled.h5``;

export const StyleH3 = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(---color-primary);
`;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

export const WebProgramming = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

export const WebContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  column-gap: 0.5rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
  }
`;

export const Details = styled.article`
  display: flex;
  gap: 1rem;

  .experience_icon {
    margin-top: 6px;
    color: var(--color-primary);
  }
`;

export const Language = styled.h4``;

export const Proficient = styled.small``;

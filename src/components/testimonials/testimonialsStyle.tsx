import styled from "styled-components";

export const Container = styled.div`
  width: 40% !important;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    width: 60% !important;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-with-sm) !important;
  }
`;

export const TestimonialsItem = styled.article`
  background: var(--color-primary-variant);
  text-align: center;
  padding: 2rem;
  border-radius: 2rem;
  user-select: none;
`;

export const Avatar = styled.div`
  width: 4rem;
  aspect-ratio: 1/1;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 0.4rem solid var(--color-primary-variant);
`;

export const ClientName = styled.h5``;

export const ClientReview = styled.small`
  color: var(--color-light);
  font-weight: 300;
  display: block;
  width: 80%;
  margin: 0.8rem auto 0;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    width: var(--container-with-sm);
  }
`;


import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 1rem;
  margin-top: 7rem;
  a {
    color: var(--color-bg);
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const Logo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

export const PermaLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 1rem;
    display: flex;
    border: 1px solid transparent;
    border-radius: 0.75rem;

    :hover {
      background: transparent;
      color: var(--color-bg);
      border-color: var(--color-bg);
    }
  }

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 2.5rem;
  }
`;

export const CopyRight = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

import styled from "styled-components";

export const PortfolioWrapper = styled.section`
  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 600px) {
  }
`;

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  :hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  h3 {
    margin: 1.2rem 0 2rem;
  }
`;

export const ItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const ItemCTA = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

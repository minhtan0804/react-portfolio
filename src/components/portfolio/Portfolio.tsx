import React from "react";
import Images from "../../assets/images";
import {
  ItemCTA,
  ItemImage,
  PortfolioContainer,
  PortfolioItem,
  PortfolioWrapper,
} from "./portfolioStyle";

type Props = {};

const project = [
  {
    id: 1,
    image: Images.portfolio.IMG1,
    title: "Crypto currency dashboards and financial data visualization",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: Images.portfolio.IMG2,
    title: "Orion UI kit - Charts templates & infographic in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: Images.portfolio.IMG3,
    title: "Eclipse - Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },
  {
    id: 4,
    image: Images.portfolio.IMG4,
    title: "Orion UI kit for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/19838639-Orion-UI-kit-for-Figma",
  },
  {
    id: 5,
    image: Images.portfolio.IMG5,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20643153-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
  {
    id: 6,
    image: Images.portfolio.IMG6,
    title: "Orion UI kit – data visualization and charts templates for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
];

const Portfolio = (props: Props) => {
  return (
    <PortfolioWrapper id="portfolio">
      <h5>My RecentWork</h5>
      <h2>Portfolio</h2>

      <PortfolioContainer className="container">
        {project.map((item) => (
          <PortfolioItem key={item.id}>
            <ItemImage>
              <img src={item.image} alt="project_image" />
            </ItemImage>

            <h3>{item.title}</h3>
            <ItemCTA>
              <a href={item.github} className="btn">
                Github
              </a>
              <a
                href={item.demo}
                target={"_blank"}
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </ItemCTA>
          </PortfolioItem>
        ))}
      </PortfolioContainer>
    </PortfolioWrapper>
  );
};

export default Portfolio;

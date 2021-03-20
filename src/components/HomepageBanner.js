import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

import homeBanner from "../images/home-banner.jpg";
import { HomepageBannerStyles } from "../styles/HomepageBanner";

const HomepageBanner = ({ bannerContent }) => {
  const { title, description, link, linkLabel, background } = bannerContent;

  console.log(background);

  console.log(bannerContent);
  return (
    <HomepageBannerStyles className="homepage-banner">
      <Image fluid={background.fluid} />

      <h1 className="banner__title">{title.text}</h1>
      <div className="banner-content container"></div>
    </HomepageBannerStyles>
  );
};

export default HomepageBanner;

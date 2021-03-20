import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HomepageBanner from "../components/HomepageBanner";
import MainContent from "../components/MainContent";

const Homepage = ({ data }) => {
  console.log(data);

  if (!data) return null;
  const document = data.allPrismicHomepage.edges[0].node.data;

  const bannerContent = {
    title: document.hero_title,
    // description: document.banner_description,
    link: document.banner_link,
    // linkLabel: document.banner_link_label,
    background: document.hero_image,
  };

  return (
    <Layout isHomepage>
      <SEO title="Home" />
      <HomepageBanner bannerContent={bannerContent} />
      <MainContent />
    </Layout>
  );
};

export const query = graphql`
  query Homepage {
    allPrismicHomepage {
      edges {
        node {
          data {
            hero_image {
              alt
              fluid(maxWidth: 1200) {
                ...GatsbyPrismicImageFluid
              }
            }
            hero_link {
              raw
              url
            }
            hero_title {
              text
            }
          }
        }
      }
    }
  }
`;

export default Homepage;

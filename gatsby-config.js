module.exports = {
  siteMetadata: {
    title: "Gatsby + Prismic Tutorial",
    description: "Learn how to integrate Prismic into your Gatsby project.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Josefin Sans`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "veagle",
        schemas: {
          homepage: require("./custom_types/homepage.json"),
          navigation: require("./custom_types/navigation.json"),
          page: require("./custom_types/page.json"),
        },
      },
    },
  ],
};

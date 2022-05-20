module.exports = {
  siteMetadata: {
    title: `IW UGM 2022`,
    siteUrl: `https://www.iwugm2022.web.app`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-12DK9D53ET", 
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //       threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
    //       once: false, // Defines if animation needs to be launched once
    //       disable: false, // Flag for disabling animations
    //   },
    // }
  ],
}

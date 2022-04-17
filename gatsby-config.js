module.exports = {
  siteMetadata: {
    title: `IW UGM 2022`,
    siteUrl: `https://www.iwugm2022.web.app`,
  },
  plugins: [
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
  ],
}

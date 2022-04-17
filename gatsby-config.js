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
          "G-LHB61EC407", 
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
  ],
}

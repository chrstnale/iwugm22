module.exports = {
  siteMetadata: {
    title: "IW UGM 2022",
    titleTemplate: "%s · Industrial Workshop Universitas Gadjah Mada",
    description:
      "Industrial Workshop Universitas Gadjah Mada (IW UGM) is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas Gadjah Mada. Industrial Workshop UGM is a spectacular workshop event providing an experience of solving current industrial problems with speakers from many fields of expertise.",
    url: "https://www.iwugm.com", 
    image: "/src/images/iwugm.webp",
    twitterUsername: "@iwugm",
  },
  plugins: [
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
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
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
      },
    }
  ],
}

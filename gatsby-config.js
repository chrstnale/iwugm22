module.exports = {
  siteMetadata: {
    title: `IW UGM 2022`,
    siteUrl: `https://www.iwugm.com`,
    description:
    "Industrial Workshop is an annual event held by Himpunan Mahasiswa Teknik Industri Universitas Gadjah Mada. Industrial Workshop is a spectacular workshop event providing an experience of solving current industrial problems with speakers from many fields of expertise.",
    url: "https://www.iwugm.com", // No trailing slash allowed!
    image: "/src/images/iwugm.webp", // Path to the image placed in the 'static' folder, in the project's root directory.
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

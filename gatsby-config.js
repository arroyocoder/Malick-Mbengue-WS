module.exports = {
  siteMetadata: {
    title: 'MALICK MBENGUE',
    author: 'Hunter Chang',
    description: 'Malick Mbengue Ofical Website',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'public/icons/malickLogo.png', // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-nprogress`,
    options: {
      // Setting a color is optional.
      color: `tomato`,
      // Disable the loading spinner.
      showSpinner: true,
    },
  },
    'gatsby-plugin-sass',
    `gatsby-plugin-offline`,
  ],
}

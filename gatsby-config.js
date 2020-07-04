module.exports = {
  siteMetadata: {
    title: `Ghazalli's Personal Site`,
    name: `Muhammad Ghazalli`,
    siteUrl: `https://ghazalli.github.io`,
    description: `Muhammad Ghazalli's personal site`,
    hero: {
      heading: `Data extractor`,
      maxWidth: 652
    },
      social: [
        {name: "linkedin", url: "https://linkedin.com/in/muhammad-ghazalli"},
        {name: "twitter", url: "https://twitter.com/ghazaIIi"},
        {name: "github", url: "https://github.com/ghazalli"},
        {name: "instagram", url: "https://www.instagram.com/ghazalli___"}
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ghazalli`,
        short_name: `Ghazalli's Personal Site`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.jpg`
      }
    }
  ]
};

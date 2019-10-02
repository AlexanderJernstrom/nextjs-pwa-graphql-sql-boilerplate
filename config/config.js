const appSlug = 'nextjs-graphql-hooks-boilerplate'
const serverPort = process.env.PORT || 3123

const completeConfig = {

  default: {
    serverPort,
    appSlug,
    appUrl: 'https://nextjs-graphql-hooks-boilerplate.herokuapp.com/',
    appName: 'Next.js + GraphQL + Postgres SQL boilerplate',
    appTagline: 'Best boilerplate ever',
    appDescription: 'This is a great boilerplate.',
    googleAnalyticsId: 'UA-XXXXXXX-X',
    googleSiteVerification: false,
    databaseUrl: process.env.DATABASE_URL || `postgresql://localhost/${appSlug}`
  },

  development: {
    appUrl: `http://localhost:${serverPort}/`
  },

  production: {
  }

}

// Public API
module.exports = {
  config: { ...completeConfig.default, ...completeConfig[process.env.NODE_ENV] },
  completeConfig
}

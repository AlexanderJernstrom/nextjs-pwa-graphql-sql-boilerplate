import React from 'react'
import Router from 'next/router'
import App, { Container } from 'next/app'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { googlePageview } from '../components/GoogleAnalytics'
import withApolloClient from '../graphql/with-apollo-client'

Router.events.on('routeChangeComplete', path => googlePageview(path))

class NicheNewsApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloHooksProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloHooksProvider>
      </Container>
    )
  }
}

export default withApolloClient(NicheNewsApp)

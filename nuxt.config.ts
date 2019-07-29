import NuxtConfiguration from '@nuxt/config';
import Config from 'config';

const {google, facebook, userInfoEndpoint} = Config.get('auth');

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
 ** Headers of the page
 */
  head: {
    titleTemplate: 'Not A Mimic',
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: 'assets/favicon.ico'}
      ,
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/breakpoints',
    '~/plugins/srd',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/markdownit',
    'svg-to-vue-component/nuxt'
  ],
  markdownit: {
    injected: true
  },
  axios: {
    baseURL: 'https://localhost.com/api/v1'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          user: {url: userInfoEndpoint, method: 'get', propertyName: 'user'}
        },
      },
      google: {
        client_id: google.clientId,
        scope: google.scope,
        response_type: 'code',
        access_type: 'offline',
        redirect_uri: google.redirectUri,
        userinfo_endpoint: userInfoEndpoint
      },
      facebook: {
        client_id: facebook.clientId,
        scope: facebook.scope,
        response_type: 'code',
        redirect_uri: facebook.redirectUri,
        userinfo_endpoint: userInfoEndpoint
      },
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: {
            base: '#b71c1c',
            lighten1: '#f05545',
            darken1: '#7f0000',
          },
          secondary: {
            base: '#263238',
            lighten1: '#4f5b62',
            darken1: '#000a12'
          },
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    },
    icons: {
      iconfont: 'md',
      values: {}
    }
  },
  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://localhost:4000',
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: 'ws://localhost:4000', // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      },
      test: {
        httpEndpoint: 'http://localhost:5000',
        //wsEndpoint: 'ws://localhost:5000',
        tokenName: 'apollo-token'
      }
    }
  },
  manifest: {
    name: 'Not A Mimic',
    lang: 'en'
  },
  icon: {
    iconSrc: './assets/icons/siteIcon.png'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack nuxtConfig here
    */
    extend(config, ctx) {
      config.devtool = ctx.isClient ? '#source-map' : 'inline-source-map'
    }
  }
};

export default config;

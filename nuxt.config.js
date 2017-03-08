module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nightshell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nightshell.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32.png' }
    ]
  },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css',
    { src: '~assets/scss/main.scss', lang: 'scss' }
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'Darkred' },
  /*
   ** Build configuration
   */
  plugins: [
    '~plugins/ga.js'
  ],
  build: {
    /*
     ** Run ESLINT on save
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // enable webpack analyzer plugin
    analyze: true
  }
}

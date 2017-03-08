if (process.BROWSER_BUILD && process.env.NODE_ENV === 'production') {
  // Include Google Analytics
  // Set the current page
  /*eslint-disable */
  var ua = require('universal-analytics')
  var visitor = ua('UA-88974105-1', {https: true})
  visitor.pageview("/", function (err) {
    console.log(err)
  })
  window.onNuxtReady((app) => {
    // And the route has changed
    app.$nuxt.$on('routeChanged', (to, from) => {
      // We tell Google Analytic to update the page
      visitor.pageview(to.fullPath, function (err) {
        console.log(err)
      })
    })
  })
  /*eslint-enable */
}

<template>
	<section class="container">
		<h1 class="title">
			Nuxt.js - The Voltron of Static Site Generators
		</h1>
		<Card>
			<p>
				<a href="https://nuxtjs.org/">Nuxt.js</a> is a Vue.js framework which makes use of many modern web technologies such as:
			</p>
			<ul>
				<li>
					<a href="https://vuejs.org/v2/guide/index.html">Vue.js</a> framework for performance, composability and development speed.
				</li>
				<li>
					<a href="https://en.wikipedia.org/wiki/Semantic_URL">Clean-urls(semantic)</a> and <a href="https://en.wikipedia.org/wiki/Deep_linking">deep-linking</a> that works with vue-router, history, search-engines on <a href="https://vuejs.org/v2/guide/ssr.html">server-side rendering</a> or static hosting.
				</li>
				<li>
					<a href="https://webpack.js.org/guides/code-splitting-require/#components/sidebar/sidebar.jsx">Webpack 2 code-splitting</a> is integrated with Nuxt.js and vue-router, so that each route is <a href="https://en.wikipedia.org/wiki/Lazy_loading">lazy-loaded</a>.
				</li>
				<li>
					45kb gzipped - A Nuxt project contains Vue.js essentials such as Vuex, Vue-router with little overhead
				</li>
			</ul>
			<p>
				Nuxt.js is an excellent Vue.js framework for making modern web applications.  Infact, this website, <nuxt-link to="/">Nightshell.com</nuxt-link> has been made using the Nuxt.js framework and it will be my pleasure to explain my reasoning.  One of the many reasons I decided to use Nuxt.js for my blog was to develop web applications with Vue.js, webpack 2 and static site generation.</p>
			<p>
				Vue.js was already a feature-rich javascript framework for web applications but now using it within the context of Nuxt.js has me convinced this is the Voltron of Static Site Generators.
			</p>
			<img src="https://d2j3o9k0z9e36f.cloudfront.net/v3-min.jpg" alt="voltron" class="blogImage">
			<p>
				If you are making a static web application such as a blog, documentation site, landing or marketing page, Nuxt.js is one of the most elegant ways to do so.  For example, in Nuxt.js, you don't have to wire up vue-router and webpack 2 to perform lazy-loading.  Each route is automagically lazy-loaded when you build your web application with the npm run generate script.  Below is an example of my webpack-bundle-analyzer output which shows the lazy-loading bundles automatically created for each route in the /pages folder.
			</p>
      <img src="https://d2j3o9k0z9e36f.cloudfront.net/bundle-min.jpg" alt="Webpack Bundle Analyzer Output" class="blogImage" />
			<p>
				Using the npm run generate script that comes with the Nuxt.js starter also allows you have to clean-urls and deep-linking capable static website on static hosting.  The below screenshot shows how Nuxt.js builds static html pages for each route enabling clean-urls and deep-linking with static hosting such as aws s3, netlify, github pages or surge.sh.
			</p>
      <img src="https://d2j3o9k0z9e36f.cloudfront.net/generate-min.jpg" alt="Nuxt generate script" class="blogImage" />
			<p>
				You can see for yourself how it works by opening up your network tab in your browser's devtools and navigating to a link you haven't been to see the code for that route loaded on demand.  These are powerful tools to use in modern web development due to the ubiquity of mobile devices, mobile internet connections and performance issues inherent to javascript frameworks such as initial load.
				Source code is available at <a href="https://github.com/siliconmagi/aries">github</a>.
			</p>
		</Card>
	</section>
</template>
<style lang="scss" scoped>

</style>
<script>
	import Card from '../components/Card.vue'

export default {
	  components: {
	    Card
	  }
}

</script>

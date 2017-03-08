<template>
	<section class="container">
		<h1 class="title">
			Nuxt.js - A Feature Rich Vue.js Framework
		</h1>
		<Card>
			<p>
				<a href="https://nuxtjs.org/">Nuxt.js</a> is a Vue.js framework which makes use of many modern web technologies including the following:
			</p>
			<ul>
				<li>
					<a href="https://vuejs.org/v2/guide/index.html">Vue.js</a> framework for performance, maintainability and development speed.
				</li>
				<li>
					<a href="https://en.wikipedia.org/wiki/Semantic_URL">Clean-urls(semantic)</a> and <a href="https://en.wikipedia.org/wiki/Deep_linking">deep-linking</a> that works with vue-router, history, search-engines on <a href="https://vuejs.org/v2/guide/ssr.html">server-side rendering</a> or static hosting.
				</li>
				<li>
					<a href="https://webpack.js.org/guides/code-splitting-require/#components/sidebar/sidebar.jsx">Webpack 2 code-splitting</a> is integrated with Nuxt.js and vue-router, so that each page is <a href="https://en.wikipedia.org/wiki/Lazy_loading">lazy-loaded</a>.
				</li>
				<li>
					Performance - A Nuxt project contains Vue.js, Vuex, Vue-router: about 45kb gzipped
				</li>
			</ul>
			<p>
				Every technology that you read about in my blog are ones that I use myself and typically, I will use this blog to expound on my reasoning.  For example, Nightshell.com is made using the Nuxt.js framework, which has been a pleasure to learn and a joy to use.  The source code is available on <a href="https://github.com/siliconmagi/aries">github</a> if interested.  In my experience as a web developer and blogger I have analyzed and benchmarked several frameworks including react.js, angular, and vue.js.  Of those, I have found vue.js to be the most attractive in terms of speed of development (simple), performance, ecosystem and growth.  I am not alone in coming to this conclusion, in particular <a href="https://about.gitlab.com/2016/10/20/why-we-chose-vue/">Gitlab</a>, <a href="https://learninglaravel.net/topics/vuejs">Laravel</a> and <a href="https://medium.com/the-vue-point/vue-in-2016-8df71d98bfb3#.pn94jygob">github users</a> have contributed to the growth of Vue.js.
			</p>
			</br>
			<p>
				As far as my use-case, I was interested in making a blog in Vue.js for the reasons stated above.  Additionally, SEO and performance were of particular importance on static hosting.  Nuxt.js was the perfect confluence for my goals and I am happy to report that it has performed well beyond my expectations.
			</p>
</br>
<p>
One feature of Nuxt.js that I am fond of is the integration of webpack code-splitting with vue-router which enables lazy-loading per page (route).
</p>
		</Card>
	</section>
</template>
<style scoped>
	.title
	{
		margin: .5em 0;
	}
</style>
<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  }
}

</script>

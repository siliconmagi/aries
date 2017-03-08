<template>
	<section class="container">
		<h1 class="title">
			Blog page
		</h1>
		<Card>
			<h3>
				Blog Posts:
			</h3>
			<p>
				<nuxt-link to="/nuxtjs">
					Nuxt.js - A Feature-Rich Vue.js Framework
				</nuxt-link>
			</p>
		</Card>
	</section>
</template>

<style scoped>
	.title
	{
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

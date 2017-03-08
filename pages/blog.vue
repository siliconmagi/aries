<template>
	<section class="container">
		<h1 class="title">
			Blog page
		</h1>
		<Card>
			<h3>
				Recent Posts:
			</h3>
			<nuxt-link to="/nuxtjs">
				Nuxt.js - A Vue.js framework great for static websites
			</nuxt-link>
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

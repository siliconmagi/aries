<template>
	<section class="container">
		<h1 class="title">
			Nightshell
		</h1>
		<Card>
			<h3>
				Recent Activity:
			</h3>
      <BlogList></BlogList>
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
import BlogList from '../components/BlogList.vue'

export default {
	  components: {
	    Card,
    BlogList
	  }
}

</script>

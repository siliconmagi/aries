<template>
  <section class="container">
    <h1 class="title">
      Nightshell
    </h1>
    <Card>
      <p>
        Welcome to my blog and website!  I am Silicon Magi, the creator of Nightshell.com, purveyor of fine technology and master wordsmith.  Here you will find <nuxt-link to="/blog">scrolls of wisdom</nuxt-link>, in the form of coding, entertainment and analysis.  Stay a while and listen.
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

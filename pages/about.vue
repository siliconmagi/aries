<template>
  <section class="container">
    <h1 class="title">
      About Page
    </h1>
    <Card>
      <p>
        Welcome to my blog and website!  I am Silicon Magi, the creator of Nightshell.com, purveyor of fine technology and master wordsmith.  Here you will find <a href="https://nightshell.com/blog">scrolls of wisdom</a>, in the form of coding, entertainment and analysis.  Stay a while and listen.
      </p>
    </Card>
  </section>
</template>
<script>
import Card from '../components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
<style scoped>
  .title
  {
  }
  .info
  {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }
  .button
  {
    margin-top: 50px;
  }
</style>

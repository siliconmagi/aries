<template>
  <section class="container">
    <h1 class="title">
      Vue.js - Components and how DRY code makes smooth apps.
    </h1>
    <Card>
      <p>
        <span class="tab">&#9;</span>  One of the best features of Vue.js is that it allows one to write less code by reusing code components across an application.  By identifying patterns in code, isolating them in components and reusing them when needed, applications become more efficient and maintainable.  The concept of components is reiterated in many forms such as modularity, separation of concerns, service oriented architecture, don't repeat yourself(DRY) etc.  In this article, we examine how DRY code makes smooth applications! </p>
      <img src="https://d2j3o9k0z9e36f.cloudfront.net/circuit.jpg" alt="Circuit Board" class="blogImage">
      <p>
        <span class="tab">&#9;</span> In this first example, I have a list of blog posts that I want to display on two different routes of my app and possibly later in a sidebar.  Since this code will be used at various places within my app, it is best to make it a component and import the component into each view rather than duplicate code across multiple views.
      </p>
      <strong>./components/BlogList.vue</strong>
      <pre><code class="hljs html">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link to="/blog1"</span>&gt;</span>
Blog 1
<span class="hljs-tag">&lt;<span class="hljs-name">/nuxt-link</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link to="/blog2"</span>&gt;</span>
Blog 2
<span class="hljs-tag">&lt;<span class="hljs-name">/nuxt-link</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">nuxt-link to="/blog3"</span>&gt;</span>
Blog 3
<span class="hljs-tag">&lt;<span class="hljs-name">/nuxt-link</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/p</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/template</span>&gt;</span>
</code></pre>

      <p>
        <span class="tab">&#9;</span> Now that the BlogList.vue component is built, one can import it wherever it needs to be displayed.  In this case, I have two routes which import the component in the same way shown below.
      </p>
      <strong>./pages/index.vue</strong>
      <pre><code class="hljs html">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">BlogList</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/BlogList</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>

import BlogList from '../components/BlogList.vue'

export default {
  components: {
    BlogList
  }
}
<span class="hljs-tag">&lt;<span class="hljs-name">/script</span>&gt;</span>
</code></pre>
      <p>
        <span class="tab">&#9;</span> For this second example, I use the &lt;slot&gt; &lt;/slot&gt; feature of Vue.js to reuse a ui card component and render parent components in a consistent design pattern.
      </p>
      <strong>./components/Card.vue</strong>
      <pre><code class="hljs html">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div class="container"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">!-- Parent component rendered here. --</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">slot</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/slot</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style lang="scss" scoped</span>&gt;</span>
.container
{
  background-color: black;
  border-radius: 5px;
  margin: 0 auto;
  width: 95%;
  padding: 10px;
  box-shadow: 0px 1px 4px 2px rgba(0,0,0,0.85);
}
@media (min-width: 1055px) {
  .container {
    width: 1000px;
  }
}
<span class="hljs-tag">&lt;<span class="hljs-name">/style</span>&gt;</span>
</code></pre>
      <p>
        <span class="tab">&#9;</span> Using the ui card component is similiar to the first example in that we import the component where it should be displayed.  However, the difference is that I wrap content inside the ui card component.  This wrapped content will be rendered in a consistent design pattern defined in the Card.vue component and can be reused throughout one's application.
      </p>
      <strong>./pages/index.vue</strong>
      <pre><code class="hljs html">
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Card</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">BlogList</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/BlogList</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/Card</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">/template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>

import BlogList from '../components/BlogList.vue'
import Card from '../components/Card.vue'

export default {
  components: {
    BlogList,
    Card
  }
}
<span class="hljs-tag">&lt;<span class="hljs-name">/script</span>&gt;</span>
</code></pre>
      <strong>
        Source code is available at <a href="https://github.com/siliconmagi/aries">github</a>, official Vue.js component <a href="https://vuejs.org/v2/guide/components.html">documentation</a> and what are those <nuxt-link to="/nuxtjs">&lt;nuxt-link&gt;</nuxt-link>s about?
      </strong>
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
<style lang="scss" scoped>
  .tab {
    white-space:pre;
  }
  pre {
    text-align: left;
  }
  code {
    text-align: left;
  }
  strong {
    color: #4848ff;
  }
</style>

<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: {id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag" class="tags">
      <router-link :to="{ name: 'Tag', params: { tag: tag }}">
      #{{ tag }}
        </router-link>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    post: Object
  },
  setup (props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })

    return {
      snippet
    }
  }
}
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: #FFF;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h3::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}

.tags a {
  text-decoration: none;
  color: #3d3d3d
}
</style>
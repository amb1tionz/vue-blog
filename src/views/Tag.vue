<template>
  
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="tagPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import getPosts from '../composables/getPosts'
import PostList from '../components/PostList'
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
// TODO
// [X] create a tag route, which the tag as a route param (/tags/:tag)
// [X] in the Tag comp, make a request for all the posts
// [X] use a computed prop to return an arr of posts which have the current tag
// [X] use the useRoute func to access the tag route param
// [X] show the spinner until the data is loaded, and err if there is one

export default {
  setup () {
    const { posts, error, load } = getPosts()
    const route = useRoute()
    load()
    

    const tagPosts = computed(() => {
      return posts.value.filter((post) => post.tags.includes(route.params.tag))
    })

    return {
      posts,
      error,
      load,
      tagPosts,
      Spinner,
      PostList,
      TagCloud
    }
  }
}
</script>

<style>
  .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>
<template>
  <header>
    <router-link :to="{ name: 'Home' }">
      <h1>The Blog</h1>
    </router-link>
    <nav>
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Create' }">Create POST</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <Navbar />
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  setup () {
    return {
      Navbar
    }
  }
}
</script>

<style>
  header { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }

  header h1 {
    color: #dfdfdf;
    font-size: 48px;
  }

  header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
  }

  header a.router-link-active {
    color: #444;
    font-weight: bold;
  }
</style>

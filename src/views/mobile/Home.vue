<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js mobile App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/desktop/HelloWorld.vue'

export default {
  name: 'mobileHome',
  components: {
    HelloWorld
  }
}
</script>
